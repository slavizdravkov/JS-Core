function magicMatrices(matrix) {
    //return matrix[0];
    let sum = matrix[0].reduce((a, b) => a + b);
    for (let i = 0; i < matrix.length; i++) {
        let col = matrix.map((value, index) => value[i]);
        let sumCol = col.reduce((a, b) => a + b);
        let sumRow = matrix[i].reduce((a, b) => a + b);

        if (sumRow !== sum || sumCol !== sum) {
            return false;
        }
    }

    return true;
}


console.log(magicMatrices([[1, 0, 0],
                            [0, 0, 1],
                            [0, 1, 0]]
));
