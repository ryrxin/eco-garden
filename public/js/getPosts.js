document.addEventListener("DOMContentLoaded", function () {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);
        user_id = localStorage.getItem("user_id");

        const posts = document.getElementById("posts");

        responseData.forEach((post) => {
            const displayItem = document.createElement("div");
            let button = "";
            if (post.user_id == user_id) {
                button = `
                <button class="btn btn-danger" onclick="deleteMessage(${post.post_id})">Delete Post</button>
                `;
            }
            displayItem.className = "col-lg-6 col-md-8 col-sm-12 p-3";
            displayItem.innerHTML = `
          <div class="card border-dark bg-light mb-2">
              <div class="card-body">
                  <p class="card-text">
                      ${post.text} <br> <br>
                      Author: ${post.username} <br>
                      Created on: ${post.created_on} <br>
                      <div class="d-flex">${button}</div>
                     
                  </p>
              </div>
          </div>
          `;
            posts.appendChild(displayItem);
        });
    };

    fetchMethod(currentUrl + "/api/posts", callback);
});

function deleteMessage(id) {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);
        window.location.reload();
    };
    fetchMethod(currentUrl + `/api/posts/${id}`, callback, "DELETE");
}