let array = [-1, 2, 3, -9, 11];

function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum  += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
}
console.log(getMaxSubSum(array));

