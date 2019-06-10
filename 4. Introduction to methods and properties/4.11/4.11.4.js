let date = new Date(2015, 0, 2);

function getDateAgo (date, days) {
    let tmp = new Date ( date.getFullYear(), date.getMonth(), date.getDate() - days);
    return tmp.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 365));