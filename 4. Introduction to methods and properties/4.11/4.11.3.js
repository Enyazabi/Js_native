function getLocalDay (date) {

    let obj = {
        "пн": 1,
        "вт": 2,
        "ср": 3,
        "чт": 4,
        "пт": 5,
        "сб": 6,
        "вс": 7
    };

    for (let key in obj) {
        if (obj[key] == date.getDay())
            return obj[key]
        }
    }

let date = new Date (2012, 0, 3);
console.log(getLocalDay(date));