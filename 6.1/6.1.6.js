let user = {
    name: "Vasya",

    export: function() {
        return {
            value: this
        };
    }
};

console.log(user.export().value.name);