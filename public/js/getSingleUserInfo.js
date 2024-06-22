document.addEventListener("DOMContentLoaded", function () {
    url = new URL(document.URL);
    const urlParams = url.searchParams;

    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);
        localStorage.setItem("user_id", responseData.user_id);

        const userInfo = document.getElementById("userInfo");

        if (responseStatus == 404) {
            userInfo.innerHTML = `${responseData.message}`;
            return;
        }

        userInfo.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <p class="card-text">
                  Player ID: ${responseData.user_id} <br>
                  Username: ${responseData.username} <br>
                  Email: ${responseData.email} <br>
                  Total Points: ${responseData.points} <br> 
                  <a href="./editprofile.html" class="btn btn-primary mt-1">Edit profile</a>
                  </p>
              </div>
          </div>
      `;
    };

    fetchMethod(currentUrl + `/api/users/profile`, callback, "GET", null, localStorage.getItem("token"));
});
