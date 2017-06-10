function rotateArray(array) {
    let count = parseInt(array.pop());
    count %= array.length;

    for (let i = 0; i < count; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array.join(' ');
    //  console.log(count);
    //  console.log(array);

}


console.log(rotateArray([1, 2, 3, 4, 2]));
//rotateArray([1, 2, 3, 4, 2]);