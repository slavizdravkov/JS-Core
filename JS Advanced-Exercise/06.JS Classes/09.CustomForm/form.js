let result = (function () {
    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this._value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this.onInput();
        }

        onInput() {
            //let that = this;
            this.elements.on('input', (event) => {
                let textValue = $(event.target).val();
                this.value = textValue;
            });
        }

        get elements() {
            return this._elements;
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            for (let element of this.elements) {
                $(element).val(value);
            }
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor() {
            this._element = $('<div>').addClass('form');
            this.textBoxes = arguments;
        }


        get textBoxes() {
            return this._textBoxes;
        }

        set textBoxes(args) {
            for (let argument of args) {
                if (!argument instanceof Textbox) {
                    throw new Error("The parameter is not textbox");
                }
            }

            this._textBoxes = args;

            for (let textbox of this._textBoxes) {
                for (let element of textbox.elements) {
                    this._element.append($(element));
                }
            }
        }

        submit() {
            let allValid = true;
            for (let textbox of this._textBoxes) {
                if (textbox.isValid()) {
                    for (let element of textbox.elements) {
                        $(element).css('border', '2px solid green');
                    }
                } else {
                    for (let element of textbox.elements) {
                        $(element).css('border', '2px solid red');
                    }
                    allValid = false;
                }
            }

            return allValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
