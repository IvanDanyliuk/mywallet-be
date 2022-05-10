import mongoose from 'mongoose';

const incomeSchema = mongoose.Schema({
  user: String,
  source: String,
  amount: Number,
  category: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

let Income = mongoose.model('Incomes', incomeSchema);

export default Income;