import express from 'express';
import { 
  getUser, 
  signin, 
  signup, 
  updateUser, 
  deleteUser, 
  updatePassword, 
  setLanguage, 
  setCurrency 
} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/', updateUser);
router.delete('/', deleteUser);

router.patch('/update-password', updatePassword);
router.patch('/language', setLanguage);
router.patch('/currency', setCurrency);

export default router;