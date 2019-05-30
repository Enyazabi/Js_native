var numbers = [1, 2, 3, 4, 5];

function getSums(numbers) {
var arrSum = [];

arr.reduce(function (sum, current) {
    sum += current;
    arrSum.push(sum);

}, 0);

return arrSum;
}

console.log(getSums(numbers));

