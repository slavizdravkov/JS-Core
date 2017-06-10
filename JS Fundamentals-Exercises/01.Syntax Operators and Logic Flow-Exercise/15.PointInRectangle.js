function checkPoint(inputArray) {
    let [x, y, xMin, xMax, yMin, yMax] = inputArray;

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

checkPoint([12.5, -1, 2, 12, -3, 3]);
