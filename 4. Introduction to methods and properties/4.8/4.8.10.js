var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    var arrClean = [];

    for (var i = 0; i < arr.length; i++) {
        temp = arr[i].split("").sort().join("");
        flag = true;

        for (var j = 0; j < arrClean.length; j++) {

            if ( arrClean[i] != arrClean[j]) {
                flag = false;
            }
        }
        if ( flag === true) {
            arrClean.push(arr[i]);
        }

    }
}

console.log( aclean(arr));