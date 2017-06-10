function split(inputString, delimiter) {
    let stringToArray = inputString.split(delimiter);

    return stringToArray.join('\n');
}

console.log(split('One-Two-Three-Four-Five', '-'));