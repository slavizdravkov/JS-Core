function generateRow(number, ch1, ch2) {
    let row = '';
    let rowLength = 2 * number - 1;
    for (let i = 1; i <= rowLength; i++) {
        if (i == 1 || i == Math.round(rowLength / 2) || i == rowLength) {
            row += ch1;
        } else {
            row += ch2;
        }
    }

    return row;
}
function figure(number) {
    let numberOfRows = number;

    if (number % 2 == 0) {
        numberOfRows = number - 1;
    }
    let output = '';

    for (let i = 1; i <= numberOfRows; i++) {
        if (i == 1 || i == Math.round(numberOfRows / 2) || i == numberOfRows) {
            output += generateRow(number, '+', '-') + "\n";
        } else {
            output += generateRow(number, '|', ' ') + "\n";
        }

    }

    console.log(output);
}

figure(2);
