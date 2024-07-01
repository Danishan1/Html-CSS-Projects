export default (store) => ({
    key: 'session_cookie_name',
    secret: 'your_session_secret',
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  });
  