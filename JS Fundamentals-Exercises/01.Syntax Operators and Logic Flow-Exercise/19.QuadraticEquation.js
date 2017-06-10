function quadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let output = "";

    if (discriminant < 0) {
        console.log("No");
    } else if (discriminant == 0) {
        console.log(-b / (2 * a));
    } else {
        console.log((-b - Math.sqrt(discriminant)) / (2 * a));
        console.log((-b + Math.sqrt(discriminant)) / (2 * a));
    }
}

quadraticEquation(6, 11, -35);
