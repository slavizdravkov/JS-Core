(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this;
        }

        return '' + this;
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this + str;
        }

        return '' + this;
    };

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    };

    String.prototype.truncate = function (number) {

        if (this.length <= number) {
            return '' + this;
        }

        let ellipse = '.';
        let trimmedWord = this.slice(0, number).trim();
        let strWords = trimmedWord.split(' ');

        if (strWords.length > 1) {
            let newWord = strWords.join(' ');

            if (newWord.length + 3 > number) {
                return strWords.slice(0, strWords.length - 1).join(' ') + ellipse.repeat(3);
            }
            //console.log(newWord);
            return strWords.slice(0, strWords.length).join(' ') + ellipse.repeat(3);
        }

        if (number < 4) {
            return ellipse.repeat(number);
        }

        let lastWord = strWords[0];
        return lastWord.slice(0, number - 3) + ellipse.repeat(3);
        //console.log(strWords);

    };

    String['format'] = function (string) {
        let functionArguments = Array.from(arguments).slice(1, arguments.length);

        for (let i = 0; i < functionArguments.length; i++) {
            let pattern = `{${i}}`;
            string = string.replace(pattern, functionArguments[i]);
        }

        return string;
    };
})();

let str1 = 'the quick brown fox jumps over the lazy dog';
str1 = str1.truncate(45);
console.log(str1);
str1 = str1.truncate(43);
console.log(str1);
str1 = str1.truncate(25);
console.log(str1);
// str1 = str1.truncate(10);
// console.log(str1);
// str1 = str1.truncate(6);
// console.log(str1);




// let word = 'hello';
// console.log(word.slice(0, word.length - 3));