const notifications = {};

$(() => {
    // Notifications

    let loading = 0;
    $(document).on({
        ajaxStart: () => {
            if (loading === 0) $('#loadingBox').show();
            loading++;
        },
        ajaxStop: () => {
            loading--;
            setTimeout(() => {if (loading === 0) $('#loadingBox').fadeOut()}, 400);
        }
    });

    notifications.showInfo = function (message) {
        $('#infoBox span').text(message);
        $('#infoBox').show();
        $('#infoBox').click((event) => $(event.target).parent().hide());
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    };

    notifications.showError = function (message) {
        $('#errorBox span').text(message);
        $('#errorBox').show();
        $('#errorBox').click((event) => $(event.target).parent().hide());
        setTimeout(() => $('#errorBox').fadeOut(), 3000);
    };

    notifications.handleError = function (reason) {
        notifications.showError(reason.responseJSON.description);
    };
});
