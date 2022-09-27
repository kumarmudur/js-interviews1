const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const map1 = arr.map(item => item * 2);

Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]), i, this);
    }
    return newArray;
}

const map2 = arr.myMap(item => item * 2);

console.log('map2', map2);