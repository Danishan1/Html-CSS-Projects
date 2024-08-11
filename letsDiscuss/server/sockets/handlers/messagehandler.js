import { messageSocket } from '../controllers/messageSocket.js';

export const handleMessageEvents = (io, socket) => {
    socket.on('message', (msg) => messageSocket(io, socket, msg));
};
