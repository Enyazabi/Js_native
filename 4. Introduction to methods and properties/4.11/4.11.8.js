let now = new Date();

let day = now.getDate();
if (day < 10) day = "0" + day;

let month = now.getMonth() + 1;
if (month < 10) month = "0" + 1;

let year = now.getFullYear()%2000;

console.log (day + "-" + month + "-" + year);