function roundingNumber(array) {
    let [number, precision] = array;
    let decimal = 1;

    if (precision > 15) {
        precision = 15;
    }

    for (let i = 0; i < precision; i++) {
        number *= 10;
        decimal *= 10;
    }

    return Math.round(number) / decimal;
}

console.log(roundingNumber([3.1455926535897932384626433832795, 2]));