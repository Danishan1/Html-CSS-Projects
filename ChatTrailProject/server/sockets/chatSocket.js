import { Server } from 'socket.io';

const socketHandler = (server, sessionMiddleware) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.use((socket, next) => {
        sessionMiddleware(socket.request, {}, next);
    });

    io.on('connection', (socket) => {
        const userId = socket.request.session.userId;
        if (!userId) {
            return socket.disconnect();
        }
        console.log('User connected:', userId);

        socket.on('join', (chatId) => {
            socket.join(chatId);
        });

        socket.on('sendMessage', ({ chatId, message }) => {
            io.to(chatId).emit('receiveMessage', { userId, message });
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', userId);
        });
    });
};

export default socketHandler;
