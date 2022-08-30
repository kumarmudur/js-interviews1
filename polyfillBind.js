let name = {
    firstName: 'Shiva',
    lastName: 'Raj'
}

let printName = function(homeTown, state, country) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + homeTown + ' ' + state + ' ' + country);
}

Function.prototype.myBind = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName = printName.myBind(name, 'Bangalore', 'KA');
printMyName('India');