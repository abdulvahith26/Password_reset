const express = require('express');
const authController = require('../controlllers/authController');
const  auth = require('../utils/auth')

//router

const authRouter = express.Router();

//end points
  //public
authRouter.post('/register', authController.register);
authRouter.post('/login' , authController.login);
authRouter.post('/logout' , authController.logout);
authRouter.post('/forgotpassword', authController.forgotpassword); // Forgot password route
authRouter.post('/resetpassword', authController.resetpassword);

  //protected
authRouter.get('/me', auth.isAuthenticated, authController.me)
 
module.exports = authRouter; 