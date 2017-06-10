function composeTag(inputArray) {
    let [fileLocation, alternateText] = inputArray;
    let htmlTag = `<img src="${fileLocation}" alt="${alternateText}">`;

    return htmlTag;
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));
