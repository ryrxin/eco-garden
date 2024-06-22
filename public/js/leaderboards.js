document.addEventListener("DOMContentLoaded", function () {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);

        const leaderboards = document.getElementById("leaderboards");

        // Clear the current content
        leaderboards.innerHTML = "";
        responseData.slice(0, 10).forEach((user) => {
            const displayItem = document.createElement("div");
            displayItem.className = "col-12 p-1";
            displayItem.innerHTML = `
                <div class="card bg-light">
                    <div class="card-body">
                        <p class="card-text">
                            Player ID: ${user.user_id} <br>
                            Username: ${user.username} <br>
                            Points: ${user.points} <br>
                        </p>
                    </div>
                </div>
                `;
            leaderboards.appendChild(displayItem);
        });
    };

    fetchMethod(currentUrl + "/api/users", callback);
});
