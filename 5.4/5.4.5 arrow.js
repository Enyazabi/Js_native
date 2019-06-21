const filter = (arr, func) => arr.filter(func);

const inBetween = (a, b) => {

    return  (value) => (a <= value && b >= value)
};

const inArray = (arr) => {

    return (item) => (arr.indexOf(item) !== -1)
};

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, (a) =>  ( a % 2 === 0)));

console.log( filter(arr, inBetween(3, 6)) );

console.log( filter(arr, inArray([1, 2, 10])) );