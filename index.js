// import mongoose
const mongoose = require('mongoose');
const app = require ('./app');
const  express = require('express')
const cors = require('cors')
require('dotenv').config(); 

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;



// connect to the database
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        // listen for requests
        app.listen(PORT, () => {
            console.log (`Server is running @ http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log('Connection failed!');
        console.log(error);
    })