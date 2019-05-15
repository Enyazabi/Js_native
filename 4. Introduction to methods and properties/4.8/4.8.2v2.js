function camelize (str) {
    let text = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt (i) === "-") {
            text += str.charAt(++i).toUpperCase();
        } text += str.charAt(i);
    }
    return text;
}

console.log(camelize("cat-dog-pig"));