function loadIndex() {
    fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        let postListDiv = document.getElementById('postList');
        let blogPostsDiv = document.getElementById('blogPosts');

        // Add posts to the post list
        posts.forEach((post, index) => {
            let listItem = document.createElement('li');
            let link = document.createElement('a');
            link.href = `post.html?id=${index}`;
            link.textContent = post.title;
            listItem.appendChild(link);
            postListDiv.appendChild(listItem);

            // Also add the full post below
            let postDiv = document.createElement('div');
            let postTitle = document.createElement('h3');
            postTitle.textContent = post.title;
            let postContent = document.createElement('p');
            postContent.textContent = post.content;
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postContent);
            blogPostsDiv.appendChild(postDiv);
        });

        // Display the latest post
        let latestPost = posts[posts.length - 1];
        let latestPostDiv = document.getElementById('latestPost');
        let postTitle = document.createElement('h2');
        postTitle.textContent =
