const User = require('../models/user');
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();
const  cookie = require('cookie-parser');

const authController = {
     register: async(request,response) =>{
        try{
            const {name,email,password} = request.body
            const userExists = await User.findOne({email:email});

            //check user exists or not
            if(userExists) {
                return response.status(400).json({error: "user already exists"}) 
            }
          //encrypt password
           const encryptPassword = await bcrypt.hash(password, 10);

            //crt object
            const newUser = new User({
                name,
                email,
                password : encryptPassword,
            });
            //save user
            await newUser.save();
            return response.status(201).json({message : "new  user created"})

           //throw err msg
        } catch (error) {
            return response.status(500).json({error: error.message})

        }

    },
    login: async(request,response)=>{

        try{
                //get user details
            const {email,password} = request.body;
             
            //check user exist 
            const user = await User.findOne({email});

            // if user doesn't exist
           if (!user) {
                return response.status(401).json({message: "user  doesn't exits"});
            }

            //check password
             const passwordIsValid = await bcrypt.compare(password, user.password);

             //if password is !correct

             if(!passwordIsValid){
                return response.status(401).json({message:"incorrect password"});         
             }

             //generate token

             const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
             

             //store the token in cookies

             response.cookie('token', token,{httpOnly: true }); 
             

             //response

             return response.status(200).json({message:"login successfull"})




        }catch(error){
            return response.status(500).json({message: error.message }) ;
        }

    },
    logout: async(request,response) =>{
        try{ 
            // clr the saved token
            response.clearCookie('token');


            //success response

            return response.status(200).json({message : "logout successfully"})

        }catch(error){
            return response.status(500).json({message : error.message})
        }
    },
    me : async(request,response) =>{
        try{
            // get user id frm the req
            const   userId  = request.userId

            //find the  user id
            const  user = await User.findById(userId).select('-password')
            
            return response.status(200).json({user});
            
        }catch(error){
            return response.status(500).json({message: error.message})
        }

    },
    forgotpassword: async (request, response) => {
        try {
            const { email } = request.body;

            // Check if the user exists
            const user = await User.findOne({ email });
            if (!user) {
                return response.status(404).json({ error: "User not found" });
            }

            // Generate a reset token and expiration time
            const resetToken = crypto.randomBytes(32).toString('hex');
            user.passwordResetToken = resetToken;
            user.passwordResetExpires = Date.now() + 3600000; // Token valid for 1 hour
            await user.save();

            // Email transporter setup
            const transporter = nodemailer.createTransport({
                service: "gmail", 
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }      
            });


            // Reset link
            const resetLink = `https://merry-panda-2b7423.netlify.app/resetpassword/${resetToken}`;

            // Email options
            const mailOptions = {
                from: 'vahithtask@gmail.com' ,  // Sender email
                to: email, // Recipient email
                subject: "Password Reset Request",
                html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h2 style="color: #4CAF50; text-align: center;">Password Reset Request</h2>
                  <p>Hello,</p>
                  <p>You requested to reset your password. Please click the button below to reset it:</p>
                  <a href="${resetLink}" style="
                    display: inline-block;
                    margin-top: 15px;
                    padding: 12px 25px;
                    font-size: 18px;
                    color: #fff;
                    background-color: #4CAF50;
                    text-decoration: none;
                    border-radius: 5px;
                    text-align: center;
                  ">Reset Password</a>
                  <p style="margin-top: 20px;">This link is valid for 1 hour.</p>
                  <p>If you did not request this, please ignore this email.</p>
                  <hr />
                  <p style="font-size: 12px; color: #777;">
                    If the button doesn't work, copy and paste the following link into your browser:<br />
                    <a href="${resetLink}" style="color: #4CAF50;">${resetLink}</a>
                  </p>
                </div>
              `
            };
              


            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return response.status(500).json({ message: error.message });
                }
                response.status(200).json({ message: "Password reset link sent to your email." });
            });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },

    resetpassword: async (request, response) => {
        try {
            const { email, newPassword, confirmPassword } = request.body;
    
            // Check if email, newPassword, and confirmPassword are provided
            if (!email || !newPassword || !confirmPassword) {
                return response.status(400).json({ message: "All fields are required" });
            }
    
            // Check if newPassword and confirmPassword match
            if (newPassword !== confirmPassword) {
                return response.status(400).json({ message: "Passwords do not match" });
            }
    
            // Find the user by email
            const user = await User.findOne({ email });
    
            if (!user) {
                return response.status(404).json({ message: "User not found" });
            }
    
            // Hash the new password
            const encryptedPassword = await bcrypt.hash(newPassword, 10);
    
            // Update the user's password
            user.password = encryptedPassword;
            await user.save();
    
            response.status(200).json({ message: "Password reset successful" });
        } catch (error) {
            response.status(500).json({ message: "Internal server error" });
        }
    },
    
    
    
    
   
    }     
module.exports = authController;