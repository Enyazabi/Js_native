var arr = [1, 2, 3, 4, 5];

function sortRandomly(a, b) {
 return Math.random() - 0.5;
}

arr.sort(sortRandomly);

console.log(arr);