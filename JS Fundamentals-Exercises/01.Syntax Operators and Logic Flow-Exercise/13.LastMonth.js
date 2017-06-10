function lastDay(inputArray) {
    let [day, month, year] = inputArray;
    let date = new Date(year, month - 1, 0);

    console.log(date.getDate());
}

lastDay([13, 1, 2004]);
