function randomInteger(min, max) {
    var randNumber = min + Math.random() * (max + 1 - min);
    randNumber = Math.floor(randNumber);
    return randNumber;
}

console.log( randomInteger(5, 10));