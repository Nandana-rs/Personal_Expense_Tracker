
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController'); // Import the registerUser function

// Registration Route
router.post('/register', registerUser);

module.exports = router;
