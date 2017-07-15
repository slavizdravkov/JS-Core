function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe("Loockup", function () {
   it("should return undefined for (123, 2)", function () {
       expect(lookupChar(123, 2)).to.be.equal(undefined);
   });

   it("should return undefined for string as second parameter", function () {
      expect(lookupChar('niki', 'niki')).to.be.eq(undefined);
   });

   it("should return undefined for floating point number aa index", function () {
       expect(lookupChar('niki', 1.26)).to.be.equal(undefined);
   });

   it("should return Incorrect index for negative number as index value", function () {
       expect(lookupChar('proba', -1)).to.be.equal('Incorrect index');
   });

   it("should return Incorrect index for incorrect index value", function () {
       expect(lookupChar('proba', 10)).to.be.equal('Incorrect index');
   });

    it("should return Incorrect index for index value equal to string length", function () {
        expect(lookupChar('proba', 5)).to.be.equal('Incorrect index');
    });

    it("should return correct value for correct input", function () {
        expect(lookupChar('proba', 1)).to.be.equal('r');
    });

    it("should return correct value for correct input", function () {
        expect(lookupChar('paralelepiped', 9)).to.be.equal('i');
    });

});
