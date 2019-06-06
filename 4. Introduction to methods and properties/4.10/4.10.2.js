function sum() {
    let arr = [];

    for(let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }

    let sum = 0;

    for(let j = 0; j < arr.length; j++) {
         let fsum = sum + arr[j];
        sum = fsum;
    }

    console.log(sum);
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);