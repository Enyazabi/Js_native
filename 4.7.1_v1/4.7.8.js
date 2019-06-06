function filterRange(numbers, min,max) {
    var result = [];

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] >= min && numbers[i] <= max) {
            result.push(numbers[i]);
        }
    }

    return result
}

var numbers = [6, 9, 8, 1, 2, 7, 3, 4, 5];
var filtered = filterRange(numbers, 3, 8);

console.log (filtered);