import express from 'express';
import cors from 'cors';
import http from 'http';
import sessionConfig from './config/session.js';
import authRouter from './routes/authRoutes.js';
import chatRouter from './routes/chatRoutes.js';
import generalRouter from './routes/generalRoutes.js';
// import socketHandler from './sockets/chatSocket.js';
import { errorHandler } from './utils/errorHandler.js';

const app = express();
const server = http.createServer(app);
const sessionMiddleware = sessionConfig();

app.use(cors());
app.use(express.json());
app.use(sessionMiddleware);

app.use('/auth', authRouter);
app.use('/chat', chatRouter);
app.use('/general', generalRouter);

app.use(errorHandler);

// socketHandler(server, sessionMiddleware);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
