const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/authController'); // Ensure this path is correct

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', authUser);

module.exports = router;
