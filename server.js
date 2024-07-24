
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // <-- Add this line
const app = express();
const port = 3002;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personal_expense_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON bodies
app.use(express.json()); // <-- Add this line
app.use(cors()); // <-- Add this line

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // <-- Add this line

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
