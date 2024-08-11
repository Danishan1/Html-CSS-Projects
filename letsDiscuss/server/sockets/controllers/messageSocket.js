export const messageSocket = (io, socket, msg) => {
    console.log('Message received:', msg);
    console.log('Socket ID:', socket.id);
    console.log('User ID:', socket.request.session.userId);
    console.log('Session ID:', socket.request.session.id);
    io.emit('message', "socketHandler"); // Broadcast the message to all connected clients
}

// io.on('connection', (socket) => {
//     socket.on('joinChat', (chatId) => {
//         socket.join(chatId);
//         console.log(`User joined chat room: ${chatId}`);
//     });

//     socket.on('leaveChat', (chatId) => {
//         socket.leave(chatId);
//         console.log(`User left chat room: ${chatId}`);
//     });
// });
