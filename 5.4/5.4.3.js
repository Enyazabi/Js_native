function makeBuffer() {
    let  string = "";

    function buffer(str) {

        if (arguments.length === 0) {
            return string;
        }
        string += str;
    }

    buffer.clear = function() {
        string = "";
    };

    return buffer;
}

let buffer = makeBuffer();

buffer("abc");
buffer("dfg");

console.log(buffer());

buffer.clear();

console.log(buffer());
