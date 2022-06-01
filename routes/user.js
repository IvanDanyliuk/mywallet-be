import express from 'express';
import { getUser, signin, signup, updateUser, deleteUser, updatePassword } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/', updateUser);
router.delete('/', deleteUser);

router.patch('/update-password', updatePassword)

export default router;