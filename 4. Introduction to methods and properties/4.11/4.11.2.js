let date = new Date(2012,0,3);
let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

function getWeekDay(date) {
    return days[date.getDay()];
}

console.log( getWeekDay(date) );