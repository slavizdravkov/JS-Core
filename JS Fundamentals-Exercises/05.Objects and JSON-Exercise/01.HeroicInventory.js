function solve(arr) {
    let heroes = [];
    for (let line of arr) {
        let currentHero = line.split(' / ');
        let [heroName, level, items] = currentHero;
        let obj = {};
        obj["name"] = heroName;
        obj["level"] = Number(level);
        obj["items"] = [];
        if (currentHero.length > 2) {
            obj["items"] = items.split(', ');
        }
        heroes.push(obj);
    }

    console.log(JSON.stringify(heroes));
}

solve(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'

    ]
);