import express from 'express';
import session from 'express-session';

const app = express();

const sessionMiddleware = session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: false,
    httpOnly: true,
  },
});

app.use(sessionMiddleware);

app.get('/set-session', (req, res) => {
  req.session.username = 'Danisaan';
  // req.session.loggedIn = true;
  console.log(req.session.id);
  res.send('Session data set');
});

app.get('/update-session', (req, res) => {
  if (req.session.loggedIn) {
    req.session.username = 'UpdatedDanisaan';
    console.log(req.session.id);
    res.send('Session data updated');
  } else {
    res.status(401).send('Not logged in');
  }
});

app.get('/check-session', (req, res) => {
  if (req.session.username) {
    console.log(req.session.id);
    res.send(`Logged in as ${req.session.username}`);
  } else {
    res.send('Not logged in');
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
