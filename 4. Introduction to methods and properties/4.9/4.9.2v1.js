let numbers = [1, 2, 3, 4, 5];

function getSums(numbers) {
let arrSum = [];

numbers.reduce(function (sum, current) {
    sum += current;
    arrSum.push(sum);

    return sum;
    },0);

    return arrSum;
}

console.log(getSums(numbers));

