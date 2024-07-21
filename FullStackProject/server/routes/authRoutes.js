import express from 'express';
import { registerUser, loginUser, logout, profile } from '../controllers/auth/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);
router.get('/profile', profile);

export default router;