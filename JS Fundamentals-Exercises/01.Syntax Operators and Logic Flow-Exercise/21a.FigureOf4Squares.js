function figure(number) {
    let firstRow = '';
    let middleRow = '';
    let rowLength = 2 * number - 1;
    for (let i = 1; i <= rowLength; i++) {
        if (i == 1 || i == Math.round(rowLength / 2) || i == rowLength) {
            firstRow += '+';
            middleRow += '|';
        } else {
            firstRow += '-';
            middleRow += ' ';
        }
    }

    let numberOfRows = number;

    if (number % 2 == 0) {
        numberOfRows = number - 1;
    }
    let output = '';

    for (let i = 1; i <= numberOfRows; i++) {
        if (i == 1 || i == Math.round(numberOfRows / 2) || i == numberOfRows) {
            output += firstRow + "\n";
        } else {
            output += middleRow + "\n";
        }

    }

    console.log(output);
}

figure(4);

