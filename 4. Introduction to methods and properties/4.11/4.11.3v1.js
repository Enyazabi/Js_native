let date = new Date ( 2012, 0, 3);

function getLocalDay (date) {
    return date.getDay() !== 0 ? date.getDay() : 7;
}

 console.log ( getLocalDay(date));
