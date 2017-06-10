function attack(array) {
    //console.log(array);
    let matrix = [];

    for (let i = 0; i < array.length; i++) {
        matrix.push(array[i].split(' ').map(Number));
    }
    //console.log(matrix);

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumFirstDiagonal += matrix[row][row];
        sumSecondDiagonal += matrix[row][matrix.length - row - 1];
    }

    if (sumFirstDiagonal === sumSecondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix[row].length - row - 1) {
                    matrix[row][col] = sumFirstDiagonal;
                }
            }
        }
    }

    //console.log(sumFirstDiagonal);
    //console.log(sumSecondDiagonal);
    console.log(matrix.map(r => r.join(' ')).join('\n'));

}

attack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
