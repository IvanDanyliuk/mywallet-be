import mongoose from 'mongoose';

const incomeSchema = mongoose.Schema({
  userId: String,
  title: String,
  amount: Number,
  category: String,
  description: String,
  badgeColor: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

let Income = mongoose.model('Incomes', incomeSchema);

export default Income;