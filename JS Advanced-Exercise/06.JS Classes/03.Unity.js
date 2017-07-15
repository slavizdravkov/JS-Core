class Rat {
    constructor(name) {
        this.name = name;
        this.ratUnite = [];
    }

    unite(newRatClass) {
        if (newRatClass instanceof Rat) {
            this.ratUnite.push(newRatClass);
        }
    }

    getRats() {
        return this.ratUnite;
    }

    toString() {
        return `${this.name}\n##${this.ratUnite.map(a => a.name).join('\n##')}`;
    }
}

let rat = new Rat("Pesho");
//console.log(typeof rat.unite());
//console.log(rat.toString());
//console.log(rat.constructor.name);

rat.unite(new Rat("Gosho"));
rat.unite(new Rat("Sasho"));
console.log(rat.getRats());
console.log(rat.toString());