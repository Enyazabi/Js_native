let date = new Date(2012, 0, 3);

function getWeekDay (date) {
    let dayOfWeek = date.getDay();

    let obj = {
        0: "вс",
        1: "пн",
        2: "вт",
        3: "ср",
        4: "чт",
        5: "пт",
        6: "сб"
    }

    let array =[];

        for (let key in obj) {
            array[key] = obj[key];
        }

        key = 0;
            while (key !== dayOfWeek) {
                key++;
            }
        console.log(obj[key]);
}

getWeekDay(date);
