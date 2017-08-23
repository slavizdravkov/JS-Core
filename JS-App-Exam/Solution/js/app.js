const handlers = {};
const util = {};

$(() => {
    util.getPartials = function (page) {
        return {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            page: `./templates/${page}.hbs`
        }
    };

    util.getUser = function (ctx) {
        ctx.username = localStorage.getItem('username');
    };

    util.calcTime = function (dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    };


    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.home);

        //this.get('#', handlers.login);
        this.post('#/login', handlers.loginAction);

        this.get('#/catalog', handlers.catalog);

        //this.get('#', handlers.register);
        this.post('#/register', handlers.registerAction);

        this.get('#/create', handlers.createPost);
        this.post('#/create', handlers.createPostAction);

        this.get('#/myposts', handlers.myPosts);

        this.get('#/delete/:id', handlers.deletePost);

        this.get('#/edit/:id', handlers.editPost);
        this.post('#/edit/:id', handlers.editPostAction);

        this.get('#/comments/:id', handlers.comments);
        this.post('#/comments/:id', handlers.commentAddComment);

        this.get('#/deletecomment/:id', handlers.deleteComment);

        this.get('#/logout', function (ctx) {
            auth.logout().then(() => {
                localStorage.clear();
                notifications.showInfo('Logout successful.');
                ctx.redirect('#');
            });
        });

    }).run();
});