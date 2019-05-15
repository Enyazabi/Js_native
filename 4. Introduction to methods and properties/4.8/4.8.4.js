arr = [5, 3, 8, 1, 2, 7];


function filterRangeInPlace (arr, a, b) {
for (var i = 0; i< arr.length; i++) {
var value = arr[i];

    if (value < a || value > b) {
        arr.splice(i, 1);
    }
}
}

console.log(filterRangeInPlace(arr, 1,4));