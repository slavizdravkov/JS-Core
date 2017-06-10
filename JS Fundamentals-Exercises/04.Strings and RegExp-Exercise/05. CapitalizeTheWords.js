function capitalize(inputString) {
    let strToArr = inputString.split(' ');
    let output = [];

    for (let word of strToArr) {
        let arr = Array.from(word).map((ch, i) => i === 0 ? ch.toUpperCase() : ch.toLowerCase()).join('');
        output.push(arr);
    }
    console.log(output.join(' '));
}

function test(str) {
    let arr = Array.from(str).map((ch, i) => i === 0 ? ch.toUpperCase() : ch.toLowerCase()).join('');
    console.log(arr);
}

capitalize('Was that Easy? tRY thIs onE for SiZe!');
//test('Capitalize');