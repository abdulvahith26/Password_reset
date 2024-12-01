// import mongoose
const mongoose = require('mongoose');
const app = require ('./app');
const  express = require('express')
const cors = require('cors')
require('dotenv').config(); 

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;



// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log (`Server is running @ http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log('Connection failed!');
        console.log(error);
    })