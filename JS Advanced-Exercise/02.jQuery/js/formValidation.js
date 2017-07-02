function validate() {
    let userName = $('#username');
    let eMail = $('#email');
    let pass = $('#password');
    let confirmPass = $('#confirm-password');
    let companyCheck = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');
    let allValid = true;

    companyCheck.on('change', function () {
        if (this.checked) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
        validateForm();
        validationDiv.css('display', allValid ? 'block' : 'none');
        allValid = true;
    });

    function validateForm() {
        validateWithRegex(userName, /^[A-Za-z0-9]{3,20}$/g);
        validateWithRegex(eMail, /^.*?@.*?\..*$/g);
        if (pass.val() === confirmPass.val()) {
            validateWithRegex(pass, /^\w{5,15}$/g);
            validateWithRegex(confirmPass, /^\w{5,15}$/g);
        } else {
            pass.css('border', 'solid red');
            confirmPass.css('border', 'solid red');
            allValid = false;
        }
        
        if (companyCheck.is(':checked')) {
            validateCompanyNumber();
        }
    }

    function validateWithRegex(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
            allValid = false;
        }
    }
    
    function validateCompanyNumber() {
        let companyNum = +companyNumber.val();
        if (companyNum >= 1000 && companyNum <= 9999) {
            companyNumber.css('border', 'none');
        } else {
            companyNumber.css('border', 'solid red');
            allValid = false;
        }
    }
}
