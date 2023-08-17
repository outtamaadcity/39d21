let currentPage = 1;

const fetchPosts = async (page) => {
    // 서버에서 블로그 글을 가져오는 API를 호출합니다. 
    // 이 예제에서는 대신 임시 데이터를 사용합니다.
    // 실제로는 AJAX 또는 fetch 함수를 사용하여 데이터를 가져올 수 있습니다.
    return [
        { title: "제목 1", content: "내용 1" },
        { title: "제목 2", content: "내용 2" }
    ];
};

const loadPosts = async () => {
    const posts = await fetchPosts(currentPage);
    const postsContainer = document.getElementById('postsContainer');

    for (let post of posts) {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    }

    currentPage++;
};

document.getElementById('loadMore').addEventListener('click', loadPosts);

// 첫 페이지의 포스트를 로드합니다.
loadPosts();
