function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var schedule = {}
console.log( isEmpty(schedule) );

schedule["8:30"] = "wake up";
console.log( isEmpty(schedule) );
