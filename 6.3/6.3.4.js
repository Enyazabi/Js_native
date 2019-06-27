function Calculator() {

    let methods = {
        "-": function(a, b) {

            return a - b;
        },

        "+": function(a, b) {

            return a + b;
        }
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!methods[op] || isNaN(a) || isNaN(b)) {

            return NaN;
        }

        return methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") );

let powerCalc = new Calculator;

powerCalc.addMethod("*", function(a, b) {

    return a * b;
});

powerCalc.addMethod("/", function(a, b) {

    return a / b;
});

powerCalc.addMethod("**", function(a, b) {

    return Math.pow(a, b);
});

let result = powerCalc.calculate("2 ** 3");

console.log(result);