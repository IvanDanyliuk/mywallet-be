import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
  user: String,
  title: String,
  amount: Number,
  category: String,
  description: String,
  badgeColor: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let Expense = mongoose.model('Expenses', expenseSchema);

export default Expense;