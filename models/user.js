const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "role": {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    },
    "createdAt": {
        type: Date,
        default: Date.now
    },
    "updatedAt": {
        type: Date,
        default: Date.now
    },
    "company": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },

});

module.exports = mongoose.model('User', userSchema, 'users');