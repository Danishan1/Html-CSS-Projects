// servers/letsCollaborate/src/index.js
import express, { json } from 'express';
import session from 'express-session';
import cors from 'cors';
import 'dotenv'
const PORT = process.env.PORT || 4324

const app = express();

app.use(cors());
app.use(json());
app.use(session({
    secret: 'letsCollaborate_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
    res.send('Welcome to letsCollaborate!');
});

app.listen(PORT, () => {
    console.log(`letsCollaborate running on port ${PORT}`);

});
