function addAndRemove(commandsArray) {
    let numberToAdd = 1;
    let outputArray = [];

    for (let i = 0; i < commandsArray.length; i++) {
        switch (commandsArray[i]) {
            case 'add':
                outputArray.push(numberToAdd);
                numberToAdd++;
                break;
            case 'remove':
                outputArray.pop();
                numberToAdd++;
                break
        }
    }

    if (outputArray.length ===0) {
        return "Empty";
    }

    return outputArray.join('\n');
}

console.log(addAndRemove(['remove', 'remove', 'remove']));