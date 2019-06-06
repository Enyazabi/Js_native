let array = [1, 2, 3, 4, 9, 6];

function sum(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++){
        summ += arr[i]
    }
    return summ
}

function getMaxSubSum (a) {
    let isNegative = true;
    let isPositive = true;
    for (let i = 0; i <= a.length; i++) {
        if(a[i] > 0) isNegative = false
    }
    if(isNegative) return 0;

    for (let i = 0; i <= a.length; i++) {
        if(a[i] < 0) isPositive = false
        }

    if(isPositive) return sum(a);

    let max = 0;
    for (let i = 0; i <= a.length; i++) {
        let m = 0;
        for (let j = i; j < a.length; j++) {
            m = m + a[j];
            m > max?
                max = m
                :
                null
        }
    }
    return max
}

console.log(getMaxSubSum(array));