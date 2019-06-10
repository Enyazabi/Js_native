let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate()
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 365));