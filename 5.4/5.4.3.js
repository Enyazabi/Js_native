function makeBuffer() {
    var  string = "";

    function buffer(str) {

        if (arguments.length === 0) {
            return string;
        }
        string += str;
    };

    buffer.clear = function() {
        string = "";
    }

    return buffer;
};

var buffer = makeBuffer();

buffer("abc");
buffer("dfg");

console.log(buffer());

buffer.clear();

console.log(buffer());
