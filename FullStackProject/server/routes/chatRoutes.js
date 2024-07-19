import express from 'express';
import { getChats, createChat } from '../controllers/chatController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getChats);
router.post('/', createChat);

export default router;
