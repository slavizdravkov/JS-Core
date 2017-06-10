function binaryToDecimal(binaryNumber) {
    let decimalNumber = 0;
    let power = 7;

    for (let i = 0; i < 8; i++) {
        decimalNumber += Number(binaryNumber[i]) * Math.pow(2, power);
        power--;
    }

    console.log(decimalNumber);
}

binaryToDecimal('11110000');
