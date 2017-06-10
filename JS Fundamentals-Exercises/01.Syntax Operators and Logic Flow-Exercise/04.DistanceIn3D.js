function distance3D(array) {
    let distX = Math.pow(array[0] - array[3], 2);
    let distY = Math.pow(array[1] - array[4], 2);
    let distZ = Math.pow(array[2] - array[5], 2);

    return Math.sqrt(distX + distY + distZ);
}

console.log(distance3D([3.5, 0, 1, 0, 2, -1]));