function solve() {
    return {
        collection: [],
        add: function (element) {
            this.collection.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if (index >= 0 && index < this.size) {
                this.collection.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            return this.collection[index];
        },
        size: 0,
        sort: function () {
            this.collection = this.collection.sort((a, b) => a - b);
        },
        toString: function () {
            return this.collection.join(' ');
        }
    };

}

let coll = solve();
coll.add(1);

console.log(coll.toString());