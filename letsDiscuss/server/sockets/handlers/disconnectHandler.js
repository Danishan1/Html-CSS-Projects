export const handleDisconnect = (io, socket) => {
    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
};
