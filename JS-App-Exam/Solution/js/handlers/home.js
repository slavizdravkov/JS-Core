handlers.home = function () {
    this.loadPartials(util.getPartials('viewWelcome')).then(function () {
        this.partial('./templates/common/main.hbs');
    });
};