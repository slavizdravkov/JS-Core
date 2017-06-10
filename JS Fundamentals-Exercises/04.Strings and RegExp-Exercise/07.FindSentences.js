function findSentences(inputString) {
    let regex = /\b_{1}[a-zA-Z0-9]+\b/g;
    let textTokens = inputString.match(regex);
    let output = [];

    for (let sentence of textTokens) {
        output.push(sentence.replace('_', ''));
    }
    console.log(output.join(','));
}

findSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');