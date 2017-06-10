function cookingByNumbers(array) {
    let number = array[0];
    function cooking(number, operator) {
        let cook = function (a, op) {
            return op(a);
        };
        let chop = function (a) {
            return a / 2;
        };
        let dice = function (a) {
            return Math.sqrt(a);
        };
        let spice = function (a) {
            return a + 1;
        };
        let bake = function (a) {
            return a * 3;
        };
        let fillet = function (a) {
            return a - (a * 0.2);
        };

        switch (operator) {
            case "chop": return cook(number, chop);
            case "dice": return cook(number, dice);
            case "spice": return cook(number, spice);
            case "bake": return cook(number, bake);
            case "fillet": return cook(number, fillet);
        }
    }

    for (let i = 1; i < array.length; i++) {
        number = cooking(number, array[i]);
        console.log(number);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);