import express from 'express';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../controllers/expenses.js';

const router = express.Router();

router.get('/', getExpenses);
router.post('/', createExpense);
router.patch('/', updateExpense);
router.delete('/', deleteExpense);

export default router;