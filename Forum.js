document.addEventListener("DOMContentLoaded", function() {
    const postTitleInput = document.getElementById("postTitle");
    const postContentInput = document.getElementById("postContent");
    const postButton = document.getElementById("postButton");
    const postImageInput = document.getElementById("postImage");
    const forumContainer = document.querySelector(".forum-container");

    postButton.addEventListener("click", function() {
        const title = postTitleInput.value;
        const content = postContentInput.value;
        const image = postImageInput.value;

        if (title && content && image) {
            createPost(title, content, image);
            postTitleInput.value = "";
            postContentInput.value = "";
            postImageInput.value = "";
        }
    })

    function createPost(title, content, image) {
        const postDiv = document.createElement("div");
        postDiv.className = "forum-post";
        postDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <img>${image}</img>
        `;
        forumContainer.insertBefore(postDiv, forumContainer.firstChild);
    }
});

// Get the modal and buttons
const modal = document.getElementById("post-form");
const openBtn = document.getElementById("question");
const closeBtn = document.getElementById("closeModalBtn");

// Open the modal when the open button is clicked
openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the modal when the close button or overlay is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when the user clicks anywhere outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
