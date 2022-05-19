import mongoose from "mongoose";
import Income from '../models/incomeItem.js';

export const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();
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

