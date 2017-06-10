function gradsToDegrees(grads) {
    let degrees = (grads * 0.9);

    if (degrees < 0) {
        degrees  = 360 + (degrees % 360);
    }
    else {
        degrees  = (degrees % 360);
    }

    console.log(degrees);
}

gradsToDegrees(100);
