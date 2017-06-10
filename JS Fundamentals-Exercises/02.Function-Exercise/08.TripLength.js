function tripLength(array) {
    function getDistance(pointOne, pointTwo) {
        let distanceX = Math.pow(pointOne.x - pointTwo.x, 2);
        let distanceY = Math.pow(pointOne.y - pointTwo.y, 2);

        return Math.sqrt(distanceX + distanceY);
    }

    function getPointsArray(arr) {
        let arrayOfPoints = [];

        for (let i = 0; i < arr.length; i += 2) {
            let obj = {};
            obj['x'] = arr[i];
            obj['y'] = arr[i + 1];
            arrayOfPoints.push(obj);
        }

        return arrayOfPoints;
    }

    function getDistancesArray(pointsArray) {
        let distances = [];
        for (let i = 1; i <= pointsArray.length; i++) {
            let distance = {};
            if (i === pointsArray.length) {
                distance['name'] = i;
                distance['value'] = getDistance(points[i - 1], points[0]);
                distances.push(distance);
                continue;
            }

            distance['name'] = i;
            distance['value'] = getDistance(points[i - 1], points[i]);
            distances.push(distance);
        }

        distances.sort((a, b) => a.value - b.value);
        return distances;

    }

    function getOutput(distArray) {
        let finalDistance = distArray[0].value + distArray[1].value;
        let key1 = distArray[0].name;
        let key2 = distArray[1].name;

        if ((key1 === 1 && key2 === 2) || (key1 === 2 && key2 === 1)){
            return `1->2->3: ${finalDistance}`;
        } else if ((key1 === 2 && key2 === 3) || (key1 === 3 && key2 === 2)){
            return `1->3->2: ${finalDistance}`;
        } else {
            return `2->1->3: ${finalDistance}`;
        }

    }

    let points = getPointsArray(array);
    let distances = getDistancesArray(points);


    // console.log(points);
    // console.log(distances);
    console.log(getOutput(distances));
}

tripLength([0, 3, 1, 0, -1, 0]);