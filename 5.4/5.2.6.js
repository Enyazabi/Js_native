let currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter1());
console.log(counter1());