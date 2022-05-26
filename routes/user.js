import express from 'express';
import { getUser, signin, signup, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/', updateUser);
router.delete('/', deleteUser);

export default router;