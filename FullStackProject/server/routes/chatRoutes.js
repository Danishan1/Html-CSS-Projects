import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { getChats } from '../controllers/chat/getChat.js';
import { createChat } from '../controllers/chat/createChat.js';
import { createGroupChat } from '../controllers/chat/createGroupChat.js';
import addMessage from '../controllers/chat/messageController.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/:chatId', getChats);
router.post('/:chatId', addMessage);
router.post('/createChat', createChat);
router.post('/createGroupChat', createGroupChat);

export default router;
