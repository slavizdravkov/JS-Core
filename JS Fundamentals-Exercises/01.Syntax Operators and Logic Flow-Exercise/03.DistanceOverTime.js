function distance(array) {
    let dist1 = array[0] * array[2] / 3600;
    let dist2 = array[1] * array[2] /3600;
    let distBetweenObj = Math.abs(dist1 - dist2);

    console.log(distBetweenObj * 1000);
}

distance([5, -5, 40]);