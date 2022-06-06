import express from 'express';
import { getReports, getReport, createReport, updateReport, deleteReport } from '../controllers/reports.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getReports);
router.get('/:id', getReport);
router.post('/', createReport);
router.patch('/', updateReport);
router.delete('/', deleteReport);

export default router;