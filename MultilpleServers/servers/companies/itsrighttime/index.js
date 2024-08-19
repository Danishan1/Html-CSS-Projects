import express from 'express';
import cors from 'cors';
import http from 'http';
import sessionConfig from './src/config/session.js'; // Import the session configuration
import publicApiRoute from './src/routes/publicApiRoute.js';
import privateApiRoute from './src/routes/privateApiRoute.js';
import { isAuth } from './src/middleware/isAuth.js';
import { errorHandler } from './src/utils/errorHandler.js';
import 'dotenv/config';

const PORT = process.env.PORT || 4320;

const app = express();
const server = http.createServer(app);
const sessionMiddleware = sessionConfig();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000', // React app's URL
  credentials: true,
}));

// Parshing jshon data
app.use(express.json());

// Register for Express Session
app.use(sessionMiddleware);

// Public API routes
app.use('/api', publicApiRoute);

// Authentication middleware for private routes
app.use(isAuth);

// Private API routes
app.use('/auth-api', privateApiRoute);

// Error handling middleware
app.use(errorHandler);

// Running Server
server.listen(PORT, () => {
  console.log(`itsRIGHTtime server running on port ${PORT}`);
});

export { server };
