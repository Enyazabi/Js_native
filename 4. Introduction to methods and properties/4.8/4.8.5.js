var arr = [5, 2, 1, -10, 8];

function compareNumeric (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}

arr.sort(compareNumeric);
console.log(arr);