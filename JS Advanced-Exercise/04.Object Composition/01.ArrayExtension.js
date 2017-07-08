(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };

    Array.prototype.average = function () {
        let sum = this.reduce((a, b) => a + b);
        return sum / this.length
    };
})();




let arr = [1,3,5,7,9];

//arr = arr.filter((value, key) => key !== 0);

arr = arr.slice(2);

console.log(arr);
