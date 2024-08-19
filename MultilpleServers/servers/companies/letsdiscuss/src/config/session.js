import session from 'express-session';
import dotenv from 'dotenv';
import MySQLStore from 'express-mysql-session';
import pool from './dbRT.js';

dotenv.config();

// Initialize MySQL session store
const MySQLSessionStore = MySQLStore(session);

// Create an instance of the session store
const sessionStore = new MySQLSessionStore({}, pool);


// Configure the session middleware
const sessionConfig = () => session({
  key: process.env.ALL_SESSION_COOKIE_NAME || 'itsRIGHTtimeKey',
  secret: process.env.ALL_SESSION_SECRET || 'Hey_@@_This_@@_Is_@@_Secret_@@_Key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: process.env.NODE_ENV === 'production', // Secure cookie if in production
    httpOnly: true, // Prevent client-side JavaScript access
  },
  store: sessionStore // Use the MySQL session store
});

export default sessionConfig;
