class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(length) {
        if (length < 0) {
            length = 0;
        }
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }

        if (this.innerLength <= 0) {
            return '.'.repeat(3);
        }

        if (this.innerLength < this.innerString.length) {
            return this.innerString.substr(0, this.innerLength) + '.'.repeat(3);
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());


test.decrease(5);
console.log(test.toString());

