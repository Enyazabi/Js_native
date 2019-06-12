const getSecondToday = () => {
    let now = new Date();
    let today = new Date().setHours(0, 0 ,0 ,0);

    return Math.round((now - today)/1000);
};

const getSecondTomorrow = () => {
    let day = 3600*24;

    return ((day - getSecondToday()));
}

console.log (getSecondTomorrow())