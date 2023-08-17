document.addEventListener("DOMContentLoaded", function() {
    loadPosts();
});

function loadPosts() {
    fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        let blogPostsDiv = document.getElementById('blogPosts');
        posts.forEach(post => {
            let postDiv = document.createElement('div');
            let postTitle = document.createElement('h2');
            let postContent = document.createElement('p');

            postTitle.textContent = post.title;
            postContent.textContent = post.content;

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postContent);
            blogPostsDiv.appendChild(postDiv);
        });
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
    });
}
