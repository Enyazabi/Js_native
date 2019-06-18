function makeBuffer(str) {
    let  string = "";

    return function buffer() {
        console.log(str);

        if (str === undefined) {
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
