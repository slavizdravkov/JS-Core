function validityChecker(arr) {
    function validDistance(pointOne, pointTwo) {
        let distanceX = Math.pow(pointOne.x - pointTwo.x, 2);
        let distanceY = Math.pow(pointOne.y - pointTwo.y, 2);
        let distance = Math.sqrt(distanceX + distanceY);

        if (distance !== Math.ceil(distance)) {
            return "is invalid";
        }
        return "is valid";
    }
    let point0 = {x:0, y:0};
    let point1 = {x:arr[0], y:arr[1]};
    let point2 = {x:arr[2], y:arr[3]};

    console.log(`{${point1.x}, ${point1.y}} to {${point0.x}, ${point0.y}} ${validDistance(point1, point0)}`);
    console.log(`{${point2.x}, ${point2.y}} to {${point0.x}, ${point0.y}} ${validDistance(point2, point0)}`);
    console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} ${validDistance(point1, point2)}`);


}

validityChecker([2, 1, 1, 1]);