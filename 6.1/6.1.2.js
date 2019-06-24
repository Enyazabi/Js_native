let obj = {
    go: function() {
        console.log(this)
    }
};

(obj.go)();