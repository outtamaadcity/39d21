document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes('index.html')) {
        loadIndex();
    } else if (window.location.pathname.includes('post.html')) {
        let postId = new URLSearchParams(window.location.search).get('id');
        loadPost(postId);
    }
});

function loadIndex() {
    fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        // Add posts to the post list
        let postListDiv = document.getElementById('postList');
        posts.forEach((post, index) => {
            let listItem = document.createElement('li');
            let link = document.createElement('a');
            link.href = `post.html?id=${index}`;
            link.textContent = post.title;
            listItem.appendChild(link);
            postListDiv.appendChild(listItem);
        });

        // Display the latest post
        let latestPost = posts[posts.length - 1];
        let latestPostDiv = document.getElementById('latestPost');
        let postTitle = document.createElement('h2');
        postTitle.textContent = latestPost.title;
        let postContent = document.createElement('p');
        postContent.textContent = latestPost.content;
        latestPostDiv.appendChild(postTitle);
        latestPostDiv.appendChild(postContent);

        // Add post page buttons
        let postPagesDiv = document.getElementById('postPages');
        for (let i = 0; i < posts.length; i++) {
            let button = document.createElement('button');
            button.textContent = i + 1;
            button.onclick = function() {
                window.location.href = `post.html?id=${i}`;
            };
            postPagesDiv.appendChild(button);
        }
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
    });
}

function loadPost(postId) {
    fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        let post = posts[postId];
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postContent').textContent = post.content;
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
    });
}
