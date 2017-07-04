let solution = function () {
    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1, flavour: 2
        },
        coke: {
            carbohydrate: 10, flavour: 20
        },
        burger: {
            carbohydrate: 5, fat: 7, flavour: 3
        },
        omelet: {
            protein: 5, fat: 1, flavour: 1
        },
        cheverme: {
            protein: 10, carbohydrate: 10, fat: 10, flavour: 10
        }
    };

    return function (inputs) {
        let commandProcessor = (function () {
            return {
                restock: (microelement, qty) => {
                    microElements[microelement] += Number(qty);
                    return 'Success';
                },
                report: () => {
                    return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
                },
                prepare: (recipe, qty) => {
                    let recipeForPrepare = recipes[recipe];
                    //console.log(recipeForPrepare);
                    let recipeProducts = Object.getOwnPropertyNames(recipeForPrepare);
                    //console.log(recipeProducts);
                    let error = false;
                    let product;
                    for (let recipeProduct of recipeProducts) {
                        let neededProduct = recipes[recipe][recipeProduct] * qty;
                        if (neededProduct > microElements[recipeProduct]) {
                            error = true;
                            product = recipeProduct;
                            break;
                        }
                    }

                    if (error) {
                        return `Error: not enough ${product} in stock`;
                    } else {
                        for (let recipeProduct of recipeProducts) {
                            microElements[recipeProduct] -= recipes[recipe][recipeProduct] * qty;
                        }
                        return 'Success';
                    }
                    //console.log(Object.getOwnPropertyNames(recipeForPrepare));
                }
            }
        })();
        let commandTokens = inputs.split(' ');
        let command = commandTokens[0];
        switch (command) {
            case 'restock':
                let microElem = commandTokens[1];
                let qty = commandTokens[2];
                return commandProcessor[command](microElem, qty);
                break;
            case 'report':
                return commandProcessor[command]();
                break;
            case 'prepare':
                let recipe = commandTokens[1];
                let quantity = Number(commandTokens[2]);
                return commandProcessor[command](recipe, quantity);
        }
    }
}
solution = solution();
console.log(solution("restock carbohydrate 10"));
solution("restock flavour 10");
solution("prepare apple 1");
solution("restock fat 10");
solution("prepare burger 1");
solution("report");