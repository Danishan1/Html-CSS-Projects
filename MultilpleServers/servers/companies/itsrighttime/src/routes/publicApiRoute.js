import express from 'express';
const router = express.Router();
import authRoute from "./authRoute.js"

router.use('/auth', authRoute)

router.get('/', (req, res) => {
    res.json({ success: true, data: "You are using Public API" })
})

export default router;
