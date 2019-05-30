let numbers = [1, 2, 3, 4, 5];

function getSums(numbers) {
    let arrSum = [];
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        arrSum.push(sum);
    }

    return arrSum;
}

console.log(getSums(numbers));