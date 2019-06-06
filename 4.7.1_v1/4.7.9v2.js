var array = [];

for (var i = 2; i <= 100; i++) {
    array[i]  = true;

    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            array[i] = false;
        }
    }

    if (array[i] === true) {
        console.log(i);
    }
}

var sum = 0;
for (i = 0; i < array.length; i++) {
    if (array[i]) {
        sum += i;
    }
}

console.log(sum);


