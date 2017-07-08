function solve(obj) {
    let output = {};
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = new Map();
    carriages.set('hatchback', { type: 'hatchback'});
    carriages.set('coupe', { type: 'coupe'});

    output.model = obj.model;
    for (let engine of engines) {
        if (engine.power >= obj.power) {
            output.engine = engine;
            break;
        }
    }

    let carriage = carriages.get(obj.carriage);
    carriage.color = obj.color;
    output.carriage = carriage;

    // let wheel = '' + obj.wheelsize + ' ';
    // output.wheels = wheel.repeat(4).trim().split(' ').map(Number).map((a) => a % 2 === 0 ? --a : a);

    let wheels = [];
    let wheelSize = obj.wheelsize;
    if (wheelSize % 2 === 0) {
        wheelSize--;
    }
    for (let i = 0; i < 4; i++) {
        wheels.push(wheelSize);
    }
    output.wheels = wheels;

    return output;
}


console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));