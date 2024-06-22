const { generateContent } = require("../services/gemini");

module.exports.generateQuestion = async () => {
    try {
        const prompt = "Generate a random short question about sustainability.";
        const question = await generateContent(prompt);
        return question.trim();
    } catch (error) {
        console.error("Error generating question:", error);
        throw new Error("Error generating question with Gemini");
    }
};

module.exports.evaluateAnswer = async (answer, prompt) => {
    try {
        const evaluationPrompt = `Evaluate the following answer to the question on sustainability:\nQuestion: ${prompt}\nAnswer: ${answer}\nIs the answer good or not? Provide a score between 0 and 10.`;
        const evaluation = await generateContent(evaluationPrompt);
        const score = parseInt(evaluation.match(/\d+/)[0], 10);
        return score;
    } catch (error) {
        console.error("Error evaluating answer:", error);
        throw new Error("Error evaluating answer with Gemini");
    }
};
