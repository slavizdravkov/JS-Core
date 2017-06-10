function biggestNumber(array) {
    let [num1, num2, num3] = array;

    return Math.max(num1, num2, num3);
}

console.log(biggestNumber([-10, -20, -30]));