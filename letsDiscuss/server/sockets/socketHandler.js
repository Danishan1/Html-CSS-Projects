export const socketHandler = (io, socket) => {
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', "socketHandler"); // Broadcast the message to all connected clients
    });

    // Additional event handlers can be added here
};