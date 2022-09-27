const arr = [ 1, 2, 3, 4, 5 ];

const sum = arr.reduce(function (item, acc) {
    return item + acc;
}, 0);

const callback = (item, acc) => item + acc;

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (i === 0 && initialValue === undefined) {
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], initialValue);
        }
    }
    return accumulator;
}

const sum2 = arr.myReduce(function (item, accumulator) {
    return item + accumulator;
}, 0);

 console.log("sum2 ", sum2);