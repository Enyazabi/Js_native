function formatDate (date) {
    let diff = new Date() - date;

    switch (diff) {
        case (diff < 1000):
            return 'just';

        case  (diff < 1000 * 60):
            return (Math.floor(diff / 1000) + 'second ago');

        case (diff < 1000 * 60 * 60):
            return (Math.floor(diff / 1000 / 60) + 'minute ago');

        default:
            return formatDate_(date);

function formatDate_(date) {
    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() +1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    let hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    let mm = date.getMinutes();
    if (mm < 10) mm = '0' +mm;

    return day + '.' + month + '.' + year + ' ' + hh + ':' + mm;

}

    }
}

console.log( formatDate(new Date (new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
