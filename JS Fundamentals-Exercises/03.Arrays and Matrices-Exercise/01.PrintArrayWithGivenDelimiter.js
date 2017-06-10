function arrayWithDelimiter(array) {
    let delimiter = array[array.length - 1];
    array.splice(-1);

    return array.join(delimiter);

}

console.log(arrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));