const  jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const auth = {
    isAuthenticated: (request,response,next) =>{

        try{
            const token = request.cookies.token;

            //!token 

        if(!token){
            return response.status(401).json({message : "invalid token"})
        }

        //verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
          
        //set user id  in objects

        request.userId = decoded.id ;
        next();

        }  catch(error){      
              return response.status(500).json({message: error.message});
        }
    }
}
module.exports= auth ;