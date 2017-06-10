function solve(string, endSubstring) {
    let substringIndex = string.indexOf(endSubstring);

    //console.log(substringIndex);
    //console.log(string.substr(substringIndex));

    if (string.substr(substringIndex) === endSubstring) {
        return true;
    }

    return false;
}

console.log(solve('The new iPhone has no headphones jack.', 'o headphones jack.'));