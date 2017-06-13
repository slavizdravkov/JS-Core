function solve(array) {
    let usernames = new Set();

    for (let line of array) {
        usernames.add(String(line));
    }

    function sortUsernames(a, b) {
        if (a.length  - b.length !== 0) {
            return a.length - b.length;
        } else if (a > b){
            return 1;
        } else if (a < b) {
            return -1
        } else {
            return 0;
        }
    }

    let sortedUsernames = [...usernames.values()].sort(sortUsernames);
    //console.log(usernames);
    console.log(sortedUsernames.join('\n'));
}

solve(
    [
        'Denise',
        'Ignatius',
        'Iris',
        'Isacc',
        'Indie',
        'Dean',
        'Donatello',
        'Enfuego',
        'Benjamin',
        'Biser',
        'Bounty',
        '1Renar',
        'Rot'

    ]
);