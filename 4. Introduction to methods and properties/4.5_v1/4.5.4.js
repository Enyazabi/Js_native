var menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function isNumeric(n) {
    return !isNaN( parseFloat(n) ) && isFinite(n);
}

function multiplyNumeric(menu) {
    for (var key in menu) {
        if (isNumeric( menu[key]) ) {
            console.log(key + ":" + menu[key]*2);
        } else {
            console.log(key + ":" + menu[key]);
        }
    }
}

multiplyNumeric(menu);