const asyncHandler = require('express-async-handler');
const User = require('../models/User'); // Ensure this path is correct
const generateToken = require('../utils/generateToken'); // Ensure this path is correct

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        username,
        email,
        phoneNumber,
        password, // Ensure this matches your User model's requirements
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = { registerUser, authUser };
