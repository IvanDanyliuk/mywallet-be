import express from 'express';
import { getExchangeRate } from '../controllers/exchange.js';

const router = express.Router();

router.get('/', getExchangeRate);

export default router;