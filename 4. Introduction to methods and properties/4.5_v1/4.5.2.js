var salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250
}

var sumSalaries = 0;
for (var salary in salaries) {
    sumSalaries += salaries[salary];
}

console.log (sumSalaries);