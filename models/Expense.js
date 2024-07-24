// const mongoose = require('mongoose');

// const expenseSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   date: { type: Date, required: true },
//   amount: { type: Number, required: true },
//   category: { type: String, required: true },
//   description: { type: String }
// });

// const Expense = mongoose.model('Expense', expenseSchema);

// module.exports = Expense;

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Ensure userId is defined as String
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, default: '' }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;