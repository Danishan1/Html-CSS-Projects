import express from 'express';
import { registerUser, loginUser, logout, profile } from '../controllers/auth/authController.js';
import { verifyOTP } from '../controllers/auth/verifyOTP.js';
import { getOTP } from '../controllers/auth/getOTP.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);
router.post('/verifyOTP', verifyOTP);
router.post('/getOTP', getOTP);
router.get('/profile', profile);

export default router;
