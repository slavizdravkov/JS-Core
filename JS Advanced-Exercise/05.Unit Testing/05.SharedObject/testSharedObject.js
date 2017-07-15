let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe("sharedObject tests", function () {
    describe("Initial test", function () {
       it("input text name should return null", function () {
           expect(sharedObject.name).to.be.null;
       });

        it("input text income should return null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe("changeName test", function () {
       it("with empty string", function () {
          sharedObject.changeName('');
          expect(sharedObject.name).to.be.null;
       });

       it("with non empty string", function () {
           sharedObject.changeName('newName');
           expect(sharedObject.name).to.be.equal('newName');
       });

       describe("text field input test", function () {
           it("with empty string", function () {
               sharedObject.changeName('Nasko');
               sharedObject.changeName('');
               let nameTxtValue = $('#name').val();
               expect(nameTxtValue).to.be.equal('Nasko');
           });

           it("with non empty string", function () {
               sharedObject.changeName('Nasko');
               //sharedObject.changeName('');
               let nameTxtValue = $('#name').val();
               expect(nameTxtValue).to.be.equal('Nasko');
           });

       });
    });

    describe("changeIncome test", function () {
       it("with string", function () {
           sharedObject.changeIncome('string');
           expect(sharedObject.income).to.be.null;
       });

        it("with floating point number", function () {
            sharedObject.changeIncome(2.46);
            expect(sharedObject.income).to.be.null;
        });

        it("with negative number", function () {
            sharedObject.changeIncome(-25);
            expect(sharedObject.income).to.be.null;
        });

        it("with zero", function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.null;
        });

        it("with positive number", function () {
            sharedObject.changeIncome(45);
            expect(sharedObject.income).to.be.equal(45);
        });

        describe("Income text field test", function () {
            it("with not valid input", function () {
                sharedObject.changeIncome(23);
                sharedObject.changeIncome('string');
                let incomeTxtValue = Number($('#income').val());
                expect(incomeTxtValue).to.be.equal(23);
            });

            it("with valid input", function () {
                sharedObject.changeIncome(48);
                let incomeTxtValue = Number($('#income').val());
                expect(incomeTxtValue).to.be.equal(48);
            });
        });
    });

    describe("updateName test", function () {
       it("With empty string", function () {
          sharedObject.changeName('Nasko');
          let nameTxt = $('#name');
          nameTxt.val('');
          sharedObject.updateName();
          expect(sharedObject.name).to.be.equal('Nasko');
       });

        it("With non empty string", function () {
            sharedObject.changeName('Nasko');
            let nameTxt = $('#name');
            nameTxt.val('Nasko Naskov');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Nasko Naskov');
        });
    });

    describe("updateIncome test", function () {
        it("with string", function () {
            sharedObject.changeIncome(33);
            let incomeTxt = $('#income');
            incomeTxt.val('string');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(33);
        });

        it("with floating point number", function () {
            sharedObject.changeIncome(66);
            let incomeTxt = $('#income');
            incomeTxt.val(3.14);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(66);
        });

        it("with negative number", function () {
            sharedObject.changeIncome(99);
            let incomeTxt = $('#income');
            incomeTxt.val(-33);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(99);
        });

        it("with zero", function () {
            sharedObject.changeIncome(199);
            let incomeTxt = $('#income');
            incomeTxt.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(199);
        });

        it("with positive number", function () {
            sharedObject.changeIncome(299);
            let incomeTxt = $('#income');
            incomeTxt.val(33);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(33);
        });
    });
});