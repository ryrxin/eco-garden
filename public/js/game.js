const user_id = localStorage.getItem("user_id");

document.getElementById("send-btn").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        appendMessage("User", userInput);
        document.getElementById("user-input").value = "";
        const prompt = document.getElementById("current-prompt").textContent;
        const evaluation = await evaluateAnswer(userInput, prompt);
        appendMessage("Score", `${evaluation.score}`);

        const callback = (responseStatus, responseData) => {
            console.log("responseStatus:", responseStatus);
            console.log("responseData:", responseData);
        };

        fetchMethod(currentUrl + `/api/users/points/${user_id}/${evaluation.score}`, callback, "PUT");
    }
});

document.getElementById("regenerate-btn").addEventListener("click", async () => {
    await fetchPrompt();
});

function appendMessage(sender, message) {
    const chatLog = document.getElementById("chat-log");
    const messageElement = document.createElement("div");
    messageElement.textContent = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

async function fetchPrompt() {
    const response = await fetch("/api/game/prompts");
    const data = await response.json();
    appendMessage("Prompt", data.prompt);
    document.getElementById("current-prompt").textContent = data.prompt;
}

async function evaluateAnswer(answer, prompt) {
    const response = await fetch("/api/game/evaluate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer, prompt }),
    });
    const data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", fetchPrompt);
