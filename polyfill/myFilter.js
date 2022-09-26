const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

console.log(arr.filter(item => item > 5));

Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        const result = callback(this[i]);
        if (result) newArray.push(this[i]);
    }
    return newArray;
}

console.log(arr.myFilter(item => item > 5));