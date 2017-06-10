function sortArray(array) {
    return array.sort((a, b) => a.length === b.length
                                ? a > b
                                : a.length - b.length)
                                .join('\n');
}

console.log(sortArray(['test', 'Deny', 'omen','Default']));
