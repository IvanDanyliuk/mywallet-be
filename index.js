import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import incomesRoute from './routes/incomes.js';
import expensesRoute from './routes/expenses.js';
import profileRoute from './routes/profile.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/incomes', incomesRoute);
app.use('/expenses', expensesRoute);
app.use('/profile', profileRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));