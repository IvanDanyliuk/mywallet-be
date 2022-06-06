import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import incomesRoute from './routes/incomes.js';
import expensesRoute from './routes/expenses.js';
import userRoute from './routes/user.js';
import reportsRoute from './routes/reports.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/incomes', incomesRoute);
app.use('/expenses', expensesRoute);
app.use('/user', userRoute);
app.use('/reports', reportsRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));