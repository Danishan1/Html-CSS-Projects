import session from 'express-session';

const sessionConfig = () => session({
  key: 'session_cookie_name',
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
});

export default sessionConfig;
