import express from 'express';
import { getIncomes, createIncome, updateIncome, deleteIncome } from '../controllers/incomes.js';

const router = express.Router();

router.get('/', getIncomes);
router.post('/', createIncome);
router.patch('/:id', updateIncome);
router.delete('/:id', deleteIncome);

export default router;