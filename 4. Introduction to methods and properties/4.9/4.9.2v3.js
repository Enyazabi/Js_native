function sum() {

    return [...arguments].reduce( (a, b) => a + b, 0 );
}

console.log( sum() );
console.log( sum(1) );
