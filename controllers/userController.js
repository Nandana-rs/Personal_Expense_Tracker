
const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { username, email, phoneNumber, password } = req.body;
    
    console.log('Received data:', { username, email, phoneNumber, password }); // Debug log

    // Basic validation
    if (!username || !email || !phoneNumber || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    console.log('Existing user:', existingUser); // Debug log

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword); // Debug log

    // Create new user
    const newUser = new User({
      username,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log('User saved:', savedUser); // Debug log

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error during user registration:', error); // Log error details
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { registerUser };
