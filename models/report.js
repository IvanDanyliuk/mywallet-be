import mongoose from 'mongoose';

const reportSchema = mongoose.Schema({
  userId: String,
  heading: String,
  period: {
    from: String,
    to: String
  },
  data: {
    incomes: [
      {
        source: String,
        amount: Number,
      },
    ],
    expenses: [
      {
        source: String,
        amount: Number,
      },
    ]
  },
  comment: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

let Report = mongoose.model('Reports', reportSchema);

export default Report;