document.addEventListener("DOMContentLoaded", function() {
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



    const postTitleInput = document.getElementById("postTitle");
    const postContentInput = document.getElementById("postContent");
    const postButton = document.getElementById("postButton");
    const postImageInput = document.getElementById("postImage");
    const forumContainer = document.querySelector(".forum-container");
    const postImage = document.getElementById("postImage");

    postButton.addEventListener("click", function() {
        const title = postTitleInput.value;
        const content = postContentInput.value;
        const image = postImageInput.value;

        if ((title && content)) {
            createPost(title, content, image);
            postTitleInput.value = "";
            postContentInput.value = "";
            if (postImageInput.files.length > 0 )
                postImageInput.value = "";
            else postImageInput.value = null;
        }
    })

    function createPost(title, content, image) {
        const postDiv = document.createElement("div");
        postDiv.className = "forum-post";
        if(image != null){
            postDiv.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
                <img>${image}</img>
            `;
        }
        else{
            postDiv.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
            `;
        }
        forumContainer.insertBefore(postDiv, forumContainer.firstChild);
    }
});

