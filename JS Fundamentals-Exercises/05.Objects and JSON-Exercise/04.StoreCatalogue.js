function store(array) {
    let storeMap = new Map();

    for (let line of array) {
        let [product, price] = line.split(' : ');
        storeMap.set(product, Number(price));
    }

    let mapKeys = Array.from(storeMap.keys()).sort((a, b) => a.toLowerCase() > b.toLowerCase());
    let charArray = Array.from(new Set(mapKeys.map(a => a[0]))).sort();
    for (let char of charArray) {
        console.log(char);
        for (let key of mapKeys) {
            if (char === key[0]) {
                console.log(`  ${key}: ${storeMap.get(key)}`);
            }
        }
    }
    // console.log(storeMap);
    // console.log(mapKeys);
    // console.log(charArray);
}

store(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'

    ]
);