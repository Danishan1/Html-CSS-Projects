import express from 'express';
import http from 'http';
import sessionMiddleware from './config/session.js'; // Adjust the path as per your project structure
import authRouter from './routes/authRoutes.js';
import chatRouter from './routes/chatRoutes.js';
import socketHandler from './sockets/chatSocket.js';
import {errorHandler} from './utils/errorHandler.js'; // Import your error handler

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(sessionMiddleware);
app.use('/auth', authRouter);
app.use('/chat', chatRouter);
app.use(errorHandler); // Use error handler middleware

socketHandler(server, sessionMiddleware);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
