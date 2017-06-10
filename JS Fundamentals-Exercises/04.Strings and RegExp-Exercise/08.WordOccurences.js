function wordCount(text, word) {
    let regex = new RegExp("\\b" + word + "\\b", 'gi');
    //console.log(regex);
    let count = 0, match;
    while (match = regex.exec(text)) {
        count++
    }
    //return text.match(regex).length;
    return count;
}

console.log(wordCount('The waterfall was so high, that the child couldn’t see its peak.', 'the'));