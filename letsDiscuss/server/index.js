import express from 'express';
import cors from 'cors';
import http from 'http';
import sessionConfig from './config/session.js';
import mainRoute from "./routes/index.js";
import { errorHandler } from './utils/errorHandler.js';
import { Server as SocketServer } from 'socket.io';
import { socketHandler } from './sockets/socketHandler.js';

const app = express();
const server = http.createServer(app);
const sessionMiddleware = sessionConfig();

app.use(cors({
  origin: 'http://localhost:3000', // Your React app's address
  credentials: true
}));

app.use(express.json());
app.use(sessionMiddleware);

app.use("/api", mainRoute);
app.use(errorHandler);

const io = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Share the session middleware with Socket.io
io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socketHandler(io, socket);

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

const port = process.env.SERVER_PORT || 5001;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { io };
