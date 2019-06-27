let obj = {};

function A() {

    return obj;
}


function B() {

    return obj;
}

let b = new B;
let a = new A;

console.log( a === b );
