function getSecondToday() {
    let now = new Date();
    let today = new Date().setHours(0, 0 ,0 ,0);
    return (now - today);
}

console.log(getSecondToday());