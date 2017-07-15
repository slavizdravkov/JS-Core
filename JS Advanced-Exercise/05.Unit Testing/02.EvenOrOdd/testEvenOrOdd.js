function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;

describe("Odd or Even function", function () {
   it("with a number parameter, should return undefined", function () {
       expect(isOddOrEven(10)).to.be.equal(undefined, "Not return the correct result");
   });

   it("with a array parameter, should return undefined", function () {
       expect(isOddOrEven([1, 2, 3])).to.be.equal(undefined, "Not return the correct result");
   });

   it("with a string with even length , should return even", function () {
       expect(isOddOrEven('Niki')).to.be.equal('even');
   });

    it("with a string with odd length , should return odd", function () {
        expect(isOddOrEven('Salam')).to.be.equal('odd');
    });

});
