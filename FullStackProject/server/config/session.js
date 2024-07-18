import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const sessionConfig = () => session({
  key: process.env.SESSION_COOKIE_NAME || 'chatAppKey',
  secret: process.env.SESSION_SECRET || 'Hey_@@_This_@@_Is_@@_Secret_@@_Key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
});

export default sessionConfig;
