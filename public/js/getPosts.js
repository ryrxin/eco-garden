document.addEventListener("DOMContentLoaded", function () {
    const callback = (responseStatus, responseData) => {
        console.log("responseStatus:", responseStatus);
        console.log("responseData:", responseData);

        const posts = document.getElementById("posts");

        responseData.forEach((post) => {
            const displayItem = document.createElement("div");
            displayItem.className = "col-lg-6 col-md-8 col-sm-12 p-2";
            displayItem.innerHTML = `
          <div class="card border-dark bg-light mb-2">
              <div class="card-body">
                  <p class="card-text">
                      ${post.text} <br> <br>
                      Author: ${post.username} <br>
                      Created on: ${post.created_on} <br>
                     
                  </p>
              </div>
          </div>
          `;
            posts.appendChild(displayItem);
        });
    };

    fetchMethod(currentUrl + "/api/posts", callback);
});