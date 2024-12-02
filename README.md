# Forgot Password Feature  

This project implements a **Forgot Password** flow in a Node.js and React application.  

- The **backend** uses **Express.js**, **Mongoose**, and **JWT** for user authentication.  
- The **frontend** is built with **React** and styled using **Tailwind CSS**.  

#### 🌐 **[Backend Deployment URL](https://password-reset-1-0x9e.onrender.com)**  

---

## 🚀 Features  

- **Request Password Reset**: Users can request a password reset by entering their registered email.  
- **Email Verification**: A secure reset link with a token is sent to the user's email.  
- **Token Validation**: Tokens are verified to ensure security and prevent misuse.  
- **Reset Password**: Users can reset their password using the provided link.  

---

## 📡 API Endpoints  

- **Forgot Password**:  
  `POST` [https://password-reset-1-0x9e.onrender.com/api/v1/auth/forgotpassword](https://password-reset-1-0x9e.onrender.com/api/v1/auth/forgotpassword)  
  Use this endpoint to request a password reset link.  

- **Reset Password**:  
  `POST` [https://password-reset-1-0x9e.onrender.com/api/v1/auth/resetpassword](https://password-reset-1-0x9e.onrender.com/api/v1/auth/resetpassword)  
  Use this endpoint to reset your password using the link received via email.  

---

## 🖼️ Workflow and Sample Images  

1. **Step 1**: Click the **Forgot Password** button.  
   <div style="text-align: center; border: 1px dashed #aaa; padding: 10px; margin: 10px 0;">
       <img src="https://github.com/user-attachments/assets/33ce5d96-9f02-4d95-9d3c-f5b25ef7a1f5" alt="Forgot Password" width="350" height="200"/>
   </div>

2. **Step 2**: Enter your registered email ID and click **Send Reset Link**.  
   <div style="text-align: center; border: 1px dashed #aaa; padding: 10px; margin: 10px 0;">
       <img src="https://github.com/user-attachments/assets/880624d7-0ce0-42cd-bc57-4a43b7423f33" alt="Send Reset Link" width="350" height="200"/>
   </div>

3. **Step 3**: Check the email for the reset password link and click **Reset Password**.  
   <div style="text-align: center; border: 1px dashed #aaa; padding: 10px; margin: 10px 0;">
       <img src="https://github.com/user-attachments/assets/02875d57-afa7-4791-8e00-1414d5d42a3c" alt="Reset Password" width="350" height="200"/>
   </div>

4. **Step 4**: Enter your email ID, new password, confirm the password, and click **Reset Password**.  
   <div style="text-align: center; border: 1px dashed #aaa; padding: 10px; margin: 10px 0;">
       <img src="https://github.com/user-attachments/assets/8ad5fec9-7cf4-477b-81f4-215504aad29f" alt="Enter New Password" width="350" height="200"/>
   </div>

---

## 🔧 Technologies Used  

### Backend:  
- **Node.js**  
- **Express.js**  
- **Mongoose** (MongoDB)  
- **JSON Web Tokens (JWT)**  

### Frontend:  
- **React.js**  
- **Tailwind CSS**  

---

## 📋 Note  

Ensure you have the backend URL and SMTP configurations correctly set in the environment variables.  
For email testing during development, use tools like **Mailtrap** or **Gmail SMTP**.  

---

### 👨‍💻 **Author**: Abdul Vahith  
**License**: MIT  
