function Calculator() {
    this.read = function() {
        this.a = +prompt('Enter the first value:','');
        this.b = +prompt('Enter the second value','');
    };

    this.sum = function() {

        return this.a + this.b;
    };

    this.mul = function() {

        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("The sum = " + calculator.sum());
alert("The multiply = " + calculator.mul());