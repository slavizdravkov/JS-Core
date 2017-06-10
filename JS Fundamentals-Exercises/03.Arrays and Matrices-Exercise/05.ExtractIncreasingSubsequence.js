function extractSubsequence(array) {
    let newArray = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= newArray[newArray.length - 1]) {
            newArray.push(array[i])
        }
    }

    return newArray.join('\n');
}


//console.log(extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
