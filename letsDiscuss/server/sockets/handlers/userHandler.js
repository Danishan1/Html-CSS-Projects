import { userSocket } from '../controllers/userSocket.js';

export const handleUserEvents = (io, socket) => {
    socket.on('userEvent', (data) => userSocket(io, socket, data));
};
