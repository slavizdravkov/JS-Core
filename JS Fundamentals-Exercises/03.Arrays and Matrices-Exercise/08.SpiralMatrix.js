function spiralMatrix(rows, cols) {
    let maxNumber = rows * cols;
    let count = 1;
    let row = 0;
    let col = 0;
    let rowEnd = rows;
    let colEnd = cols;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    while (count <= maxNumber) {
        for (let i = col; i < colEnd; i++) {
            matrix[col][i] = count;
            count++;
        }
        row++;

        for (let i = row; i < rowEnd; i++) {
            matrix[i][colEnd - 1] = count;
            count++;
        }
        colEnd--;

        for (let i = colEnd - 1; i >= col; i--) {
            matrix[rowEnd - 1][i] = count;
            count++;
        }
        rowEnd--;

        for (let i = rowEnd - 1; i >= row; i--) {
            matrix[i][col] = count;
            count++;
        }
        col++
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

spiralMatrix(3, 3);
