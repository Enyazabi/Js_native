arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
    let j, k;

    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        k = arr[j];
        arr[j] = arr[i];
        arr[i] = k;
    }
    return arr;
}
shuffle(arr);
console.log(arr);