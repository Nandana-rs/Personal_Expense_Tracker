
require('dotenv').config(); // Require dotenv at the top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors()); // Use cors
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
