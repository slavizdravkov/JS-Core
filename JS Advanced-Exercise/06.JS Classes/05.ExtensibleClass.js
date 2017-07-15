let extensible = (function () {
   let id = 0;

   return class Extensible {
       constructor() {
           this.id = id++;
       }

       extend(template) {
           for (let key in template) {
               if (typeof template[key] === 'function') {
                   Extensible.prototype[key] = template[key];
               } else {
                   this[key] = template[key];
               }

           }
       }

   }
})();

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
obj1.extend({
        extensionMethod: function () {
            console.log('123');

        },
        extensionProperty: 'someString'
    }
);
console.log(obj1);
console.log(obj1.prototype);