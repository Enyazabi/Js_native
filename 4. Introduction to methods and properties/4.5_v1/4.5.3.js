var salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250
}

var maxSalary = 0;
var richBitch = "";

for (var name in salaries) {

   if (maxSalary < salaries[name]) {

    maxSalary = salaries[name];
    richBitch = name;
   }
}

console.log(richBitch);