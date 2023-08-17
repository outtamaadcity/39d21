let currentPage = 1;

function loadMorePosts() {
    // 현실적으로 여기서는 서버에서 데이터를 불러와야 하지만, 예시로 몇 가지 더미 데이터를 추가합니다.
    let dummyPosts = [
        { title: "수학 여행 가는 날!", content: "오늘은 수학여행 가는 날입니다. 모두 기대가 되네요." },
        { title: "과학 실험 수업", content: "오늘은 흥미로운 과학 실험 수업을 진행했습니다." },
        { title: "체육대회 결과", content: "체육대회에서 우리 반이 우승했습니다! 모두 수고하셨습니다." }
    ];

    let blogPostsDiv = document.getElementById('blogPosts');
    dummyPosts.forEach(post => {
        let postDiv = document.createElement('div');
        let postTitle = document.createElement('h2');
        let postContent = document.createElement('p');

        postTitle.textContent = post.title;
        postContent.textContent = post.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        blogPostsDiv.appendChild(postDiv);
    });

    currentPage++; // 페이지 번호를 증가시킵니다.
}
