function domains(array) {
    let regex = /www\.([a-zA-Z0-9\-]+)(\.[a-z]+)+/;
    let output = [], match;

    for (let line of array) {
        if (match = regex.exec(line)) {
            output.push(match[0]);
        }
    }

    console.log(output.join('\n'));
}

domains(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko',
]);