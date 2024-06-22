document.getElementById('send-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        appendMessage('User', userInput);
        document.getElementById('user-input').value = '';
        const prompt = document.getElementById('current-prompt').textContent;
        const score = await evaluateAnswer(userInput, prompt);
        appendMessage('Score', `Your answer scored: ${score}`);
    }
});

function appendMessage(sender, message) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

async function fetchPrompt() {
    const response = await fetch('/api/prompts');
    const data = await response.json();
    appendMessage('Prompt', data.prompt);
    document.getElementById('current-prompt').textContent = data.prompt;
}

async function evaluateAnswer(answer, prompt) {
    const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answer, prompt })
    });
    const data = await response.json();
    return data.score;
}

document.addEventListener('DOMContentLoaded', fetchPrompt);