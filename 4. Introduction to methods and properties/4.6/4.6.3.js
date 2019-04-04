var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
}

function findMaxSalary(obj) {
    var employeeName =""
    var maxSalary = 0

    for (var key in obj) {

        if (maxSalary < obj[key]) {
            maxSalary = obj[key]
            employeeName = key
        }
    }
        return employeeName
    }
    alert(findMaxSalary(salaries))
