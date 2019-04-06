numbers = [6,9,8,1,2,7,3,4,5]

function filterRange(numbers, min,max) {
     result = []

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] >= min && numbers[i] <= max) {
            result.push(numbers[i])
        }

    }
    return result
}

