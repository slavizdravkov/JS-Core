function solve() {
    return {
        extend: function (template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let propertyValue = template[key];
                    if (typeof propertyValue === 'function') {
                        this.__proto__[key] = template[key];
                    } else {
                        this[key] = template[key];
                    }
                }
            }
        }
    }
}

let obje = solve();
obje.extend({
    extensionMethod: function () {
        console.log('Niki')
    },
    extensionProperty: 'someString'
});

console.log(obje);
console.log(obje.__proto__);

