import express from 'express';
import cors from 'cors';
import http from 'http';
import sessionConfig from './src/config/session.js'; // Import the session configuration
import privateApiRoute from './src/routes/privateApiRoute.js';
import publicApiRoute from './src/routes/publicApiRoute.js';
import { checkAuth } from './src/middleware/checkAuth.js';
import { errorHandler } from './src/utils/errorHandler.js';
import 'dotenv/config';

const PORT = process.env.PORT || 4321;

const app = express();
const server = http.createServer(app);
const sessionMiddleware = sessionConfig();

// Middleware setup
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
    credentials: true,
}));

app.use(express.json());
app.use(sessionMiddleware);


// Public API routes
app.use('/api', publicApiRoute);

// Middleware to check authentication with itsRIGHTtime server
app.use(checkAuth);

// Private API routes
app.use('/auth-api', privateApiRoute);

// Error handling middleware
app.use(errorHandler);

server.listen(PORT, () => {
    console.log(`letsDiscuss server running on port ${PORT}`);
});

export { server };
