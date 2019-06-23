function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            let j = i;
            console.log (j);
        };
        shooters.push(shooter());
    }

    return shooters;
}

makeArmy();

