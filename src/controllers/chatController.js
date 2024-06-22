const fetch = require('node-fetch');

const chatgpt = async (prompt) => {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    };
    const data = {
        model: 'gpt-4o', 
        messages: [
            { role: 'system', content: 'You are ChatGPT, a large language model trained by OpenAI.' },
            { role: 'user', content: prompt }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData.choices[0].message.content;
    } catch (error) {
        console.error('Error calling ChatGPT API:', error.message);
        throw error;
    }
};

module.exports = { chatgpt };
