function captureNumbers(array) {
    let text = array.join('');
    let regex = /[0-9]+/g;
    let numbers = text.match(regex);

    console.log(numbers.join(' '));
}

captureNumbers(['The300',
    'What is that?',
        'I think it’s the 3rd movie.',
    'Lets watch it at 22:45',
]);