handlers.loginAction = function (ctx) {
    let {username, password} = this.params;

    if (!validations.validateUsername(username)) {
        notifications.showError('Username is not valid.');
        return;
    }

    if (!validations.validatePassword(password)) {
        notifications.showError('Password is not valid.');
        return;
    }

    auth.login(username, password).then((userInfo) => {
        auth.saveSession(userInfo);
        notifications.showInfo('Login successful.');
        ctx.redirect('#/catalog');
    }).catch(notifications.handleError);
};

handlers.registerAction = function (ctx) {
    let {username, password, repeatPass} = this.params;

    if (!validations.validateUsername(username)) {
        notifications.showError('Username is not valid.');
        return;
    }

    if (!validations.validatePassword(password)) {
        notifications.showError('Password is not valid.');
        return;
    }

    if (password !== repeatPass) {
        notifications.showError('Passwords not match.');
        return;
    }


    auth.register(username, password).then((userInfo) => {
        auth.saveSession(userInfo);
        notifications.showInfo('User registration successful.');
        ctx.redirect('#/catalog');
    }).catch(notifications.handleError);

};