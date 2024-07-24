const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Add a new expense
router.post('/', async (req, res) => {
  const { userId, date, amount, category, description } = req.body;

  // Basic validation
  if (!userId || !date || !amount || !category) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const expense = new Expense({ userId, date, amount, category, description });
    await expense.save();
    res.status(201).send('Expense added successfully');
  } catch (error) {
    res.status(500).send(`Error adding expense: ${error.message}`);
  }
});

// Get all expenses for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).send('User ID is required');
  }

  try {
    const expenses = await Expense.find({ userId });
    if (expenses.length === 0) {
      return res.status(404).send('No expenses found for this user');
    }
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send(`Error fetching expenses: ${error.message}`);
  }
});

module.exports = router;
