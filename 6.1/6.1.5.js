let user = {
    name: "Vasya",

    export: function () {

        return this;
    }
};

console.log(user.export().name);