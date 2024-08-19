import express from 'express';

import { loginUser, logoutUser, registerUser } from '../controllers/auth/authController.js';

const router = express.Router();

// Endpoint to get authentication details
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/register', registerUser);


export default router;
