let users = [{
    name: "Vasya",
    surname: "Ivanov",
    age: 20
}, {
    name: "Petya",
    surname: "Cahapaev",
    age: 25
}, {
    name: "Masha",
    surname: "Medvedeva",
    age: 18
}];

const byField = (field) => (a, b) => (a[field] > b[field] ? 1 : -1);

users.sort(byField("name"));
users.forEach(function(user) {
    console.log(user.name);
});

users.sort(byField("age"));
users.forEach(function(user) {
    console.log( user.name );
});