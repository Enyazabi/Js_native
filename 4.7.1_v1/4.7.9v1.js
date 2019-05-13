var array = [];

for (var i = 2; i < 100; i++) {
    array.push(i);
}


for (var j = 1; j < array.length; j++) {
    for (k = 1; k < 100; k++) {
        if ((k*2 == array[j]) || (k*3 == array[j]) || (k*7 == array[i])) {
            if ((array[j] != 2) && (array[j] != 3) && (array[j] != 5) && (array[j] !=7)) {
                array.splice(j, 1)
                j = j - 1;
            }
        }
    }
}

var sum = 0;

for ( var s = 0; s < array.length; s++) {
    sum = sum + array[s]
}
console.log(sum);