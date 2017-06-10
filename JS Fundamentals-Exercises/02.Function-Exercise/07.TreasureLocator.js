function treasureLocator(array) {
    function treasureLocation(x, y) {
        let islands = [];
        let tokelau = {x1:8, y1:0, x2:9, y2:1, name:'Tokelau'};
        islands.push(tokelau);
        let tuvalu = {x1:1, y1:1, x2:3, y2:3, name:'Tuvalu'};
        islands.push(tuvalu);
        let samoa = {x1:5, y1:3, x2:7, y2:6, name:'Samoa'};
        islands.push(samoa);
        let tonga = {x1:0, y1:6, x2:2, y2:8, name:'Tonga'};
        islands.push(tonga);
        let cook = {x1:4, y1:7, x2:9, y2:8, name:'Cook'};
        islands.push(cook);

        function isInside(x, y, obj) {

            if ((x >= obj.x1 && x <= obj.x2) && (y >= obj.y1 && y <= obj.y2)) {
                return true;
            }

            return false;
        }

        for (let island of islands) {
            if (isInside(x, y, island)) {
                return island.name;
            }
        }

        return "On the bottom of the ocean"
    }

    for (let i = 0; i < array.length; i += 2) {
        console.log(treasureLocation(array[i], array[i + 1]));
    }
}

treasureLocator([6, 4]);
