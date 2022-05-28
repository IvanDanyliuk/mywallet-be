import mongoose from "mongoose";
import Income from '../models/incomeItem.js';

export const getIncomes = async (req, res) => {
  const { userId } = req.query;
  try {
    const incomes = await Income.find({ userId });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIncome = async (req, res) => {
  const newIncomeItem = new Income(req.body);
  try {
    const newIncome = await newIncomeItem.save();
    res.status(200).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateIncome = async (req, res) => {
  try {
    const { id: _id, updatedIncome } = req.body;
    await Income.findByIdAndUpdate(_id, { ...updatedIncome, _id}, { new: true });
    res.status(200).json('Income item has been updated successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const { id } = req.body;
    await Income.findByIdAndDelete(id);
    res.status(200).json({ message: 'Income has been deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

