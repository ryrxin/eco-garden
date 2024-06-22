// Name: Lim Zi An
// Class: DIT/FT/1B/11
// Admin No: P2340883

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("postForm");
    const warningCard = document.getElementById("warningCard");
    const warningText = document.getElementById("warningText");
    const user_id = localStorage.getItem("user_id");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const text = document.getElementById("text").value;

        if (text !== null) {
            console.log("Post added successfully");
            console.log("user_id:", user_id);
            console.log("message:", text);
            warningCard.classList.add("d-none");

            const data = {
                user_id: user_id,
                text: text,
            };
            window.alert("Post created successfuly");
            window.location.href = "/posts.html";

            const callback = (responseStatus, responseData) => {
                console.log("responseStatus:", responseStatus);
                console.log("responseData:", responseData);
            };

            // Perform signup request
            fetchMethod(currentUrl + `/api/posts`, callback, "POST", data);

            postForm.reset();
        } else {
            warningCard.classList.remove("d-none");
            warningText.innerText = "Text can not be empty";
        }
    });
});
