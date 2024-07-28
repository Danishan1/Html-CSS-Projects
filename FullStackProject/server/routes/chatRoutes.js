import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { getChats } from '../controllers/chat/getChat.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/chat/:chatId', getChats);

export default router;
