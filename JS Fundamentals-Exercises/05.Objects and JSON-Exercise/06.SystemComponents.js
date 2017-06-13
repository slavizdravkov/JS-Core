function solve(array) {
    let systems = new Map();

    for (let line of array) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");

        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }

        if (!systems.get(systemName).has(componentName)) {
            systems.get(systemName).set(componentName, new Set());  //Вариант с масив
            //systems.get(systemName).set(componentName, []);       //Вариант със Set
        }

        let subcomponent = systems.get(systemName).get(componentName);
        subcomponent.add(subcomponentName);     //Вариант със Set
        //subcomponent.push(subcomponentName);  //Вариант с масив
    }

    function systemSort(a, b) {
        let componentsA = a[1].size;
        let componentsB = b[1].size;

        if ((componentsA - componentsB) !== 0) {
            return componentsB - componentsA;
        } else {
            return a[0].toLowerCase() > b[0].toLowerCase();
        }
    }

    let sortedSystems = [...systems.entries()].sort(systemSort);

    for (let [system, components] of sortedSystems) {
        console.log(system);
        let sortedComponents = [...components.entries()].sort((a, b) => b[1].size - a[1].size);         //Вариант със Set
        //let sortedComponents = [...components.entries()].sort((a, b) => b[1].length - a[1].length);   //Вариант с масив
        for (let [component, subcomponents] of sortedComponents) {
            console.log(`|||${component}`);
            subcomponents = subcomponents.keys();       //Вариант със Set
            for (let subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
    //console.log(unsortedSystems);
    //console.dir(sortedSystems);
}

solve(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'

    ]
);