const gameModel = require('../model/gameModel');

module.exports.getPrompt = async (req, res, next) => {
    try {
        const question = await gameModel.generateQuestion();
        res.status(200).json({ prompt: question });
    } catch (error) {
        console.error('Error fetching prompt:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports.evaluateAnswer = async (req, res, next) => {
    const { answer, prompt } = req.body;
    try {
        const score = await gameModel.evaluateAnswer(answer, prompt);
        res.status(200).json({ score });
    } catch (error) {
        console.error('Error evaluating answer:', error);
        res.status(500).json({ error: error.message });
    }
};
