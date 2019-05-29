var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    var arrClean = [];

    for (var i = 0; i < arr.length; i++) {
        f = arr[i].split("").sort().join("").toLowerCase();
        arrClean.push(f);
    }

    return [...new Set(arrClean)];
}

console.log( aclean(arr));