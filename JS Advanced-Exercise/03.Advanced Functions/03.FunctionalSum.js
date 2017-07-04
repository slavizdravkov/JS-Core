let add = (function () {
    let sum = 0;
    return function sumNumber(number) {
        sum += number;
        sumNumber.toString = function () {
            return sum;
        };
        return sumNumber;
    }
})();

console.log(add(1)(6)(-3).toString());
