import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { getChats } from '../controllers/chat/getChat.js';
import { createChat } from '../controllers/chat/createChat.js';
import { createGroupChat } from '../controllers/chat/createGroupChat.js';
import { getChatList } from '../controllers/chat/getChatList.js';
import addMessage from '../controllers/chat/messageController.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/getChat/:chatId', getChats);
router.post('/addMsg/:chatId', addMessage);
router.post('/createChat', createChat);
router.post('/createGroupChat', createGroupChat);
router.post('/getChatList', getChatList);

export default router;
