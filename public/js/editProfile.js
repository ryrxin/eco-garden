document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("editForm");
    const warningCard = document.getElementById("warningCard");
    const warningText = document.getElementById("warningText");
    const user_id = localStorage.getItem("user_id");

    getInfo(user_id);

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username !== null) {
            console.log("Profile update successful");
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password;", password);
            warningCard.classList.add("d-none");

            const data = {
                username: username,
                email: email,
                password: password,
            };

            const callback = (responseStatus, responseData) => {
                console.log("responseStatus:", responseStatus);
                console.log("responseData:", responseData);
                if (responseStatus == 204) {
                    window.alert("Update successful");
                    // Redirect user
                    window.location.href = "/profile.html";
                } else {
                    warningCard.classList.remove("d-none");
                    warningText.innerText = responseData.message;
                }
            };

            // Perform signup request
            fetchMethod(currentUrl + `/api/users/${user_id}`, callback, "PUT", data, localStorage.getItem("token"));

            // Reset the form fields
            signupForm.reset();
        } else {
            // Passwords do not match, handle error
            warningCard.classList.remove("d-none");
            warningText.innerText = "Passwords do not match";
        }
    });
});

function getInfo(user_id) {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);

        document.getElementById("username").value = responseData.username;
        document.getElementById("email").value = responseData.email;
    };

    fetchMethod(currentUrl + `/api/users/${user_id}`, callback);
}