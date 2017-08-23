let validations = (() => {
    function validateUsername(username) {
        let regex = /^[a-zA-Z]{3,}$/;

        return regex.test(username);
    }

    function validatePassword(password) {
        let regex = /^[a-zA-Z0-9]{6,}$/;

        return regex.test(password);
    }

    return {
        validateUsername,
        validatePassword
    }

})()
