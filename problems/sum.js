// sum(1)(2)(3)(4)......

let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

let sum1 = a => b => b ? sum(a + b) : a;

console.log(sum1(1)(2)(3)());