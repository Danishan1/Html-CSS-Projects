const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// POST /api/messages
router.post('/messages', chatController.createMessage);

// GET /api/messages
router.get('/messages', chatController.getAllMessages);
router.get('/run', (req, res) => {
    res.send("Good")
});

module.exports = router;
