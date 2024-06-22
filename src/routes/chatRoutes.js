const express = require('express');
const router = express.Router();
const chatpgt = require('/controllers/chatController');

router.post('/', async (req, res) => {
    const prompt = req.body.prompt;
    
    try {
        const response = await chatgpt(prompt);
        res.json({ response: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
