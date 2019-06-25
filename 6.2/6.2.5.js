/*function sum(a){
    function curSum (b) {

        return sum(a+b);
    }

    curSum.toString = function() {

        return a;
    };

    return curSum;
}

console.log(+sum(1)(2));
console.log(+sum(1)(2)(3));
console.log(+sum(5)(-1)(2));
console.log(+sum(6)(-1)(-2)(-3));
console.log(+sum(0)(1)(2)(3)(4)(5));*/

function sum (a) {

    const curSum = (b) => sum(a + b);

    curSum.toString = () => a;

    return curSum;
}

console.log(+sum(1)(2));
console.log(+sum(1)(2)(3));
console.log(+sum(5)(-1)(2));
console.log(+sum(6)(-1)(-2)(-3));
console.log(+sum(0)(1)(2)(3)(4)(5));

