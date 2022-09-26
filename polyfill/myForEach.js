const arr = [ 1, 2, 3, 4, 5];

arr.forEach((val) => console.log(val * 3));

Array.prototype.myForEach = function(callback) { 
    for (let val of this) {
        callback(val);
    }
}



arr.myForEach((val) => console.log(val * 2));

