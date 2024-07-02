import express from 'express';

const router = express.Router();


router.get('/danishan', (req, res) => {
    res.send("Danishan");
});

export default router;
