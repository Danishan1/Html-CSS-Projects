import express from 'express';
import { createChat } from '../controllers/chat/chatController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { getChats } from '../controllers/chat/getChat.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/chat/:userId', getChats);
router.post('/', createChat);

export default router;
