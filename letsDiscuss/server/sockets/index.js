import { handleMessageEvents } from './handlers/messageHandler.js';
import { handleUserEvents } from './handlers/userHandler.js';
import { handleDisconnect } from './handlers/disconnectHandler.js';
import { handleConnect } from './handlers/connectionHandler.js';

export const socketHandler = (io, socket) => {
    // Register all event handlers
    handleConnect(io, socket);
    handleMessageEvents(io, socket);
    handleUserEvents(io, socket);
    handleDisconnect(io, socket);
};
