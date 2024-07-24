const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Import bcrypt
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});
// Login a user
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).send('Login successful');
      } else {
        res.status(400).send('Invalid username or password');
      }
    } catch (error) {
      res.status(400).send('Error logging in: ' + error.message);
    }
  });

module.exports = router;
