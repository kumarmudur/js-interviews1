function getFruits(callback) {
    let fruits = ['apple', 'orange', 'banana'];
    setTimeout(() => callback(fruits), 1000);
}

// getFruits(console.log);

// promisify function
function promisify(func) {
    return function() {
        return new Promise((resolve, reject) => {
            try {
                func(resolve);
            } catch (error) {
                reject(error);
            }
        });
    }
}

const promisified = promisify(getFruits);

promisified().then((res) => console.log(res));
