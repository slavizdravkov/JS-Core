let forumService  = (() => {
    function loadAllPosts() {
        let endpoint = 'posts?query={}&sort={"_kmd.ect": -1}';

        return requester.get('appdata', endpoint, 'kinvey');
    }
    
    function createPost(author, title, url, imageUrl, description) {
        let postData = {
            author,
            title,
            url,
            imageUrl,
            description
        };

        return requester.post('appdata', 'posts', 'kinvey', postData);
    }

    function loadMyPosts() {
        let username = localStorage.getItem('username');
        let endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function deletePost(postId) {
        let endpoint = `posts/${postId}`;

        return requester.remove('appdata', endpoint, 'kinvey');

    }

    function loadPost(postId) {
        let endpoint = `posts/${postId}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }
    
    function editPost(postId, data) {
        let endpoint = `posts/${postId}`;

        return requester.update('appdata', endpoint, 'kinvey', data);
    }

    function loadComments(postId) {
        let endpoint = `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint, 'kinvey');

    }

    function createComment(data) {
        return requester.post('appdata', 'comments', 'kinvey', data);
    }

    function deleteComment(commentId) {
        let endpoint = `comments/${commentId}`;

        return requester.remove('appdata', endpoint, 'kinvey');

    }

    return {
        loadAllPosts,
        createPost,
        loadMyPosts,
        deletePost,
        loadPost,
        editPost,
        loadComments,
        createComment,
        deleteComment
    }
})()