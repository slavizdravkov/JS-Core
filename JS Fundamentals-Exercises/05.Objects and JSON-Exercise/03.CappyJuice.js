function solve(array) {
    let bottlesArray = new Map();
    let fruitMap = new Map();

    for (let line of array) {
        let [juice, quantity] = line.split(' => ');

        if (!fruitMap.has(juice)) {
            fruitMap.set(juice, 0);
        }

        fruitMap.set(juice, fruitMap.get(juice) + Number(quantity));

        if (fruitMap.get(juice) > 1000) {
            let bottles = Math.floor(fruitMap.get(juice) / 1000);
            fruitMap.set(juice, fruitMap.get(juice) % 1000);
            if (!bottlesArray.has(juice)) {
                bottlesArray.set(juice, 0);
            }

            bottlesArray.set(juice, bottlesArray.get(juice) + bottles);
        }
    }

    for (let [fruit, quantity] of bottlesArray) {
        console.log(`${fruit} => ${quantity}`);
    }
    //console.log(bottlesArray);
    //console.log(fruitMap);
}

solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
);