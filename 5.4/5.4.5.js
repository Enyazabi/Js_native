function filter (arr, func) {
    return arr.filter(func);

}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
    return a % 2 === 0
}));

console.log( filter(arr, inBetween(3, 6)) );

console.log( filter(arr, inArray([1, 2, 10])) );