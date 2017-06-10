function assignProperties(inputArray) {
    let length = inputArray.length;
    let outputObject = {};

    for (let i = 0; i < length; i+=2) {
        outputObject[inputArray[i]] = inputArray[i + 1];
    }

    return outputObject;
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
