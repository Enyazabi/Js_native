function camelize (str) {

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "-") {
            str = str.slice(0, i) + str.charAt(i+1).toUpperCase() + str.slice(i+2)
        }
    }
    return str;
}

console.log(camelize("aghhhthf-ahjdgh-adhd"));