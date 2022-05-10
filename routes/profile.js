import express from 'express';
import { getProfile, getAllProfiles, createProfile, updateProfile, deleteProfile } from '../controllers/profile.js';

const router = express.Router();

router.get('/', getProfile);
router.get('/:id', getAllProfiles);
router.post('/', createProfile);
router.patch('/:id', updateProfile);
router.delete('/:id', deleteProfile);

export default router;