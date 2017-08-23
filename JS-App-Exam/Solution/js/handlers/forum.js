//Display all posts
handlers.catalog = function (ctx) {
    util.getUser(ctx);
    forumService.loadAllPosts()
        .then(function (posts) {
            let index = 1;
            for (let post of posts) {
                post.index = index++;
                post.isAuthor = post.author === localStorage.getItem('username');
                post.datestamp = util.calcTime(post._kmd.ect)
            }
            ctx.posts = posts;
            ctx.loadPartials(util.getPartials('viewCatalog')).then(function () {
                this.partial('./templates/common/main.hbs');
            })
        }).catch(notifications.handleError);
};

//Display form for post creating
handlers.createPost = function (ctx) {
    util.getUser(ctx);
    ctx.loadPartials(util.getPartials('viewSubmit')).then(function () {
        this.partial('./templates/common/main.hbs');
    })
};

//Create post after form submitting
handlers.createPostAction = function (ctx) {
    let url = ctx.params.url;
    let description = ctx.params.comment;
    let title = ctx.params.title;
    let imageUrl = ctx.params.image;
    let author = localStorage.getItem('username');

    if (url.length === 0) {
        notifications.showError('Url must not be empty.');
        return;
    }

    if (url.substr(0,4) !== "http") {
        notifications.showError('Url is not valid.');
        return;
    }

    if (title.length === 0) {
        notifications.showError('Title must not be empty.');
        return;
    }

    forumService.createPost(author, title, url, imageUrl, description)
        .then(function (postData) {
            notifications.showInfo('Post created.');
            ctx.redirect('#/catalog');
        }).catch(notifications.handleError);
};

//Display my posts
handlers.myPosts = function (ctx) {
    util.getUser(ctx);
    forumService.loadMyPosts()
        .then(function (myPosts) {
            myPosts.forEach(p => p.datestamp = util.calcTime(p._kmd.ect));
            ctx.myPosts = myPosts;
            ctx.loadPartials(util.getPartials('viewMyPosts')).then(function () {
                this.partial('./templates/common/main.hbs');
            })
        }).catch(notifications.handleError)
};

//Delete post
handlers.deletePost = function (ctx) {
    let id = ctx.params.id.substr(1);
    forumService.deletePost(id)
        .then(function () {
            notifications.showInfo('Post deleted.');
            ctx.redirect('#/catalog');
        }).catch(notifications.handleError);
};

//Display post for editing
handlers.editPost = function (ctx) {
    util.getUser(ctx);
    let id = ctx.params.id.substr(1);
    forumService.loadPost(id)
        .then(function (postData) {
            ctx.postData = postData;
            ctx.loadPartials(util.getPartials('viewEdit')).then(function () {
                this.partial('./templates/common/main.hbs');
            })
        }).catch(notifications.handleError)
};

//Edit post
handlers.editPostAction = function (ctx) {
    //console.log(ctx);
    //let url = ctx.params.url;
    //let description = ctx.params.description;
    //let title = ctx.params.title;
    //let imageUrl = ctx.params.image;
    //let author = localStorage.getItem('username');
    let postId = ctx.params.id.substr(1);
    let data = {
        url: ctx.params.url,
        description: ctx.params.description,
        title: ctx.params.title,
        imageUrl: ctx.params.image,
        author: localStorage.getItem('username')
    };

    if (data.url.length === 0) {
        notifications.showError('Url must not be empty.');
        return;
    }

    if (data.url.substr(0,4) !== "http") {
        notifications.showError('Url is not valid.');
        return;
    }

    if (data.title.length === 0) {
        notifications.showError('Title must not be empty.');
        return;
    }

    forumService.editPost(postId, data)
        .then(function (updatedPost) {
            ctx.redirect('#/catalog');
        }).catch(notifications.handleError);
};

//Display single post and show all comments
handlers.comments = function (ctx) {
    util.getUser(ctx);
    let postId = ctx.params.id.substr(1);
    forumService.loadPost(postId)
        .then(function (post) {
            post.isAuthor = post.author === localStorage.getItem('username');
            post.datestamp = util.calcTime(post._kmd.ect);
            localStorage.setItem('postId', post._id);
            ctx.post = post;
            forumService.loadComments(postId)
                .then(function (comments) {
                    for (let comment of comments) {
                        comment.isAuthor = comment.author === localStorage.getItem('username');
                        comment.datestamp = util.calcTime(comment._kmd.ect)
                    }
                    ctx.postComments = comments;
                    ctx.loadPartials(util.getPartials('viewComments')).then(function () {
                        this.partial('./templates/common/main.hbs');
                    })
                }).catch(notifications.handleError)
        }).catch(notifications.handleError)
};

//Add comment for post
handlers.commentAddComment = function (ctx) {
    let postId = ctx.params.id.substr(1);
    let data = {
        postId: postId,
        content: ctx.params.content,
        author: localStorage.getItem('username')
    };

    forumService.createComment(data)
        .then(function (commentData) {
            notifications.showInfo('Comment created.');
            ctx.redirect(ctx.path);
        }).catch(notifications.handleError)
};

//Delete comment from post
handlers.deleteComment = function (ctx) {
    let commentId = ctx.params.id.substr(1);
    forumService.deleteComment(commentId)
        .then(function (response) {
            notifications.showInfo('Comment delete.');
            ctx.redirect(`#/comments/:${localStorage.getItem('postId')}`);
        }).catch(notifications.handleError);
};