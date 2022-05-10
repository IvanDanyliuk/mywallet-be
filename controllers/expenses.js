import mongoose from 'mongoose';
import Expense from '../models/expenseItem.js';

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const newExpenseItem = new Expense(req.body);
  try {
    const newExpense = await newExpenseItem.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExpense = async (req, res) => {

};

export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Expense has been deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};