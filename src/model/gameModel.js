const { generateContent } = require('../services/gemini');
const supabase = require('../services/supabase');

module.exports.generateQuestion = async () => {
    try {
        const prompt = "Generate a random easy question about sustainability.";
        const question = await generateContent(prompt);
        return question.trim();
    } catch (error) {
        console.error('Error generating question:', error);
        throw new Error('Error generating question with Google Gemini');
    }
};

module.exports.evaluateAnswer = async (answer, prompt) => {
    try {
        const evaluationPrompt = `Evaluate the following answer to the question on sustainability:\n\nQuestion: ${prompt}\nAnswer: ${answer}\n\nIs the answer good or not? Provide a score between 0 and 10.`;
        const evaluation = await generateContent(evaluationPrompt);
        const score = parseInt(evaluation.match(/\d+/)[0]);
        return score;
    } catch (error) {
        console.error('Error evaluating answer:', error);
        throw new Error('Error evaluating answer with Google Gemini');
    }
};

module.exports.updateUserScore = async (userId, score) => {
    const { data, error } = await supabase
        .from('users')
        .update({ score })
        .eq('id', userId);

    if (error) {
        console.error('Error updating user score:', error);
        throw error;
    }

    return data;
};