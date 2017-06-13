function solve(array) {
    let cars = new Map();

    for (let line of array) {
        let [carBrand, carModel, producedCars] = line.split(' | ');

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }

        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }

        let oldValue = cars.get(carBrand).get(carModel);
        cars.get(carBrand).set(carModel, oldValue + Number(producedCars));
    }

    for (let [brand, models] of cars) {
        console.log(brand);
        for (let [model, produce] of models) {
            console.log(`###${model} -> ${produce}`);
        }
    }
    //console.log(cars);
}

solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'

    ]
);