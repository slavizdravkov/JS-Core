function modifyAverage(number) {
    function average(num) {
        let sumOfDigits = 0;
        let count = 0;
        while (num > 0) {
            sumOfDigits += num % 10;
            count++;
            num = Math.floor(num / 10);
        }

        return sumOfDigits / count;
    }

    function addNine(num) {
        return (num + 0.9) * 10;
    }

    while (average(number) <= 5) {
        number = addNine(number);
    }

    return number;
}

console.log(modifyAverage(5835));
