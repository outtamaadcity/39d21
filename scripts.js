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

function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        // Post ID가 제공되지 않았을 경우 오류 메시지 표시
        document.getElementById('postTitle').textContent = '오류';
        document.getElementById('postContent').textContent = '잘못된 접근입니다.';
        return;
    }

    fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        if (posts[postId]) {
            document.getElementById('postTitle').textContent = posts[postId].title;
            document.getElementById('postContent').textContent = posts[postId].content;
        } else {
            // 제공된 Post ID에 해당하는 포스트가 없을 경우 오류 메시지 표시
            document.getElementById('postTitle').textContent = '오류';
            document.getElementById('postContent').textContent = '포스트를 찾을 수 없습니다.';
        }
    })
    .catch(error => {
        console.error("Error fetching post:", error);
        document.getElementById('postTitle').textContent = '오류';
        document.getElementById('postContent').textContent = '포스트를 로드하는 중 문제가 발생했습니다.';
    });
}

