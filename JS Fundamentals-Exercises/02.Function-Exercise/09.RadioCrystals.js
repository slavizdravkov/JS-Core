function radioCrystals(array) {
    let target = array[0];
    let operation = "Cut";

    for (let i = 1; i < array.length; i++) {
        let thickness = array[i];
        console.log(`Processing chunk ${thickness} microns`);
        thickness = processOperations(thickness, "Cut", cut);
        thickness = processOperations(thickness, "Lap", lap);
        thickness = processOperations(thickness, "Grind", grind);
        thickness = processOperations(thickness, "Etch", etch);

        if (thickness + 1 === target) {
            thickness = xRay(thickness);
        }

        console.log(`Finished crystal ${thickness} microns`);
    }
    
    function cut(thickness) {
        return thickness / 4;
    }
    
    function lap(thickness) {
        thickness -= thickness * 0.2;
        return thickness;
    }

    function grind(thickness) {
        thickness -= 20;
        return thickness;
    }
    
    function etch(thickness) {
        thickness -= 2;
        return thickness;
    }

    function xRay(thickness) {
        console.log('X-ray x1');
        return ++thickness;
    }
    
    function transportAndWashing(thickness) {
        console.log('Transporting and washing');
        return Math.floor(thickness);
    }

    function processOperations(thickness, strOp, op) {
        let newSize = op(thickness);
        let counter = 0;
        while (newSize >= target || Math.floor(target - newSize) === 1) {
            thickness = newSize;
            newSize = op(thickness);
            counter++;
        }

        if (counter > 0) {
            console.log(`${strOp} x${counter}`);
            thickness = transportAndWashing(thickness);
        }

        return thickness;
    }
}


radioCrystals([1375, 50000]);