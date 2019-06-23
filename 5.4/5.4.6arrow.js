const makeArmy = () => {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = () => {
            let j = i; //what is variable j is redundant?
            console.log (j);
        };
        shooters.push(shooter());
    }

    return shooters;
};

makeArmy();