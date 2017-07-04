function result() {
    let summaryOfTypes = new Map();

    for (let argument of arguments) {
        let argType = typeof argument;
        console.log(`${argType}: ${argument}`);

        if (!summaryOfTypes.has(argType)) {
            summaryOfTypes.set(argType, 0);
        }

        let oldValue = summaryOfTypes.get(argType);
        summaryOfTypes.set(argType, oldValue + 1);
    }

    let sortedTypes = [...summaryOfTypes.entries()].sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let [type, count] of sortedTypes) {
        console.log(`${type} = ${count}`);
    }
    //console.log(sortedTypes);
}

result('cat', 'dog', 42, function () { console.log('Hello world!'); });