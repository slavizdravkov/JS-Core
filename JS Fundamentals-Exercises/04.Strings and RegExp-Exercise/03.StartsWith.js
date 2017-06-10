function solve(string, substring) {
    if (string.indexOf(substring) === 0) {
        return true
    }

    return false;
}

console.log(solve('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));