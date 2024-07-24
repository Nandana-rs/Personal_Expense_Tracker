
// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for User
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
