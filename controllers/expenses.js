import mongoose from "mongoose";
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
  try {
    const { id: _id, updatedExpense } = req.body;
    await Expense.findByIdAndUpdate(_id, { ...updatedExpense, _id}, { new: true });
    res.status(200).json('Expense item has been updated successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.body;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense has been deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

