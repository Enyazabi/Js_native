let vasya = { name: "Vasya", age: 23 };
let masha = { name: "Masha", age: 18};
let vovochka = { name: "Vovochka", age: 6};

let people = [ vasya, masha, vovochka ];

function sortByAge(nameA, nameB) {
    return nameA.age - nameB.age;
}

 people.sort(sortByAge);

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}