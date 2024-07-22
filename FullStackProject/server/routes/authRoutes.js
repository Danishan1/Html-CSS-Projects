import express from 'express';
import { registerUser, loginUser, logout, profile } from '../controllers/auth/authController.js';
import { verifyOTP, generateOTP } from '../controllers/auth/verifyUser.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verifyOTP', verifyOTP);
router.post('/generateOTP', generateOTP);
router.post('/login', loginUser);
router.post('/logout', logout);
router.get('/profile', profile);

export default router;
