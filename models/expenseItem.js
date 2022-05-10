import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
  user: String,
  merchant: String,
  amount: Number,
  category: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let Expense = mongoose.model('Expense', expenseSchema);

export default Expense;