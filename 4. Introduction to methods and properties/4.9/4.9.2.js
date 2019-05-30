let numbers = [1, 2, 3, 4, 5];

function getSums(numbers) {
    let result = [];

    numbers.reduce(function (sum, current) {
        result.push(sum);

        return sum + current;
    });

    return result;
}

console.log(getSums(numbers));