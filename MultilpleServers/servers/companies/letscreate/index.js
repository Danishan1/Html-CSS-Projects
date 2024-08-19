// servers/letsCreate/src/index.js
import express, { json } from 'express';
import session from 'express-session';
import cors from 'cors';
import 'dotenv'
const PORT = process.env.PORT || 4322

const app = express();

app.use(cors());
app.use(json());
app.use(session({
    secret: 'letsCreate_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
    res.send('Welcome to letsCreate!');
});

app.listen(PORT, () => {
    console.log(`letsCreate running on port ${PORT}`);

});
