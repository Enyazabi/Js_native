let calculator = {
    read: function() {
        this.a = +prompt('Enter the first value:','');
        this.b = +prompt('Enter the second value:','');
    },

    sum: function() {

        return this.a + this.b;
    },

    mul: function () {

        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
