function sortArr(array, sortingCriteria) {
    let ascendingCriteria = function (a, b) {
        return a - b;
    };

    let descendingCriteria = function (a, b) {
        return b - a;
    };

    let criteria = {'asc': ascendingCriteria, 'desc': descendingCriteria};

    return array.sort(criteria[sortingCriteria]);
}

console.log(sortArr([14, 7, 17, 6, 8], 'desc'));