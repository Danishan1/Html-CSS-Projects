import express from 'express';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import testRoutes from './testRoutes.js';
import chatRoutes from './chatRoutes.js';
// import messageRoutes from './msgRoute.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/chats', chatRoutes);
router.use('/test', testRoutes);
// router.use('/msg', messageRoutes);

export default router;
