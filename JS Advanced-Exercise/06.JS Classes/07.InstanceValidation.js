class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this._products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let idPattern = /^\d{6}$/g;
        if (!idPattern.test(value)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let emailPattern = /[a-zA-Z0-9]+@[a-zA-Z\.]+/g;
        if (!emailPattern.test(value)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }

        let namePattern = /\b[a-zA-Z]+\b/g;
        if (!namePattern.test(value)) {
            throw new TypeError("First name must contain only Latin characters")
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }

        let namePattern = /\b[a-zA-Z]+\b/g;
        if (!namePattern.test(value)) {
            throw new TypeError("Last name must contain only Latin characters")
        }

        this._lastName = value;
    }

    get products() {
        return this._products;
    }

    set products(value) {
        this._products.push(value);
    }
}

let acc = new CheckingAccount('4234144', 'petkan@another.co.uk', 'Petkan', 'Draganov');

