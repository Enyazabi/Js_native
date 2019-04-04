var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
}

function total(obj){
    var counter=0

    for (var prop in obj){
        counter +=  obj[prop]
    }
    return counter
}

alert (total(salaries))

