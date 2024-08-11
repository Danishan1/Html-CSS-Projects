import { messageSocket } from '../controllers/messageSocket.js';

export const handleMessageEvents = (io, socket) => {
    socket.on('sendMessage', (msg) => messageSocket(io, socket, msg));
};
