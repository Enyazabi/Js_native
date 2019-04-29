function fibBinet(n) {
    var a = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(a, n) / Math.sqrt(5));
}

console.log( fibBinet(77) );