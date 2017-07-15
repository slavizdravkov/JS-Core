let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe("mathEnforcer", function () {
    describe("addFive", function () {
       it("should return undefined for ('string')", function () {
           let result = mathEnforcer.addFive('string');
           expect(result).to.be.equal(undefined);
       });

        it("should return undefined for ({age: 1})", function () {
            let result = mathEnforcer.addFive({age: 1});
            expect(result).to.be.equal(undefined);
        });

        it("should return 12 for (7)", function () {
            let result = mathEnforcer.addFive(7);
            expect(result).to.be.equal(12);
        });

        it("should return 4 for (-1)", function () {
            let result = mathEnforcer.addFive(-1);
            expect(result).to.be.equal(4);
        });

        it("should return 8.14 for (3.14)", function () {
            let result = mathEnforcer.addFive(3.14);
            expect(result).to.be.equal(8.14);
        });
    });

    describe("subtractTen", function () {
        it("should return undefined for ('subtract')", function () {
            let result = mathEnforcer.subtractTen('subtract');
            expect(result).to.be.equal(undefined);
        });

        it("should return undefined for ([12, 35, 2.28])", function () {
            let result = mathEnforcer.subtractTen([12, 35, 2.28]);
            expect(result).to.be.equal(undefined);
        });

        it("should return -3 for (7)", function () {
            let result = mathEnforcer.subtractTen(7);
            expect(result).to.be.equal(-3);
        });

        it("should return -11 for (-1)", function () {
            let result = mathEnforcer.subtractTen(-1);
            expect(result).to.be.equal(-11);
        });

        it("should return 9.14 for (19.14)", function () {
            let result = mathEnforcer.subtractTen(19.14);
            expect(result).to.be.equal(9.14);
        });
    });

    describe("sum", function () {
        it("should return undefined for ('sum', 1)", function () {
            let result = mathEnforcer.sum('sum', 1);
            expect(result).to.be.equal(undefined);
        });

        it("should return undefined for (3, [12, 35, 2.28])", function () {
            let result = mathEnforcer.sum(3, [12, 35, 2.28]);
            expect(result).to.be.equal(undefined);
        });

        it("should return 23 for (5, 18)", function () {
            let result = mathEnforcer.sum(5, 18);
            expect(result).to.be.equal(23);
        });

        it("should return 13 for (-5, 18)", function () {
            let result = mathEnforcer.sum(-5, 18);
            expect(result).to.be.equal(13);
        });

        it("should return 6.43 for (2.18, 4.25)", function () {
            let result = mathEnforcer.sum(2.18, 4.25);
            expect(result).to.be.equal(6.43);
        });

        it("should return -0.82 for (2.18, -3)", function () {
            let result = mathEnforcer.sum(2.18, -3);
            expect(result).to.be.closeTo(-0.82, 0.01);
        });
    })
});
