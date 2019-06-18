function makeBuffer() {
    let  string = "";

    return function buffer(str) {

        if (arguments.length === 0) {
            return string;
        }
        string += str;
    }
}

let buffer = makeBuffer();

buffer("abc");
buffer("dfg");
buffer("hij");

console.log(buffer());

let buffer1 = makeBuffer();
buffer1(0);
buffer1(1);
buffer(0);

console.log(buffer1());
