function solve(array) {
    let unique = [];
    for (let line of array) {
        let currentArr = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let arrSum = currentArr.reduce((a, b) => a + b);
        if (!unique.find(arr => arr.reduce((a, b) => a + b) === arrSum)) {
            unique.push(currentArr);
        }
    }

    unique.sort((a,b) => a.length > b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

solve(
    [
        '[-3, -2, -1, 0, 1, 2, 3, 4]',
        '[10, 1, -17, 0, 2, 13]',
        '[4, -3, 3, -2, 2, -1, 1, 0]'

    ]
);