function makeArmy() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function() {
            console.log (i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
