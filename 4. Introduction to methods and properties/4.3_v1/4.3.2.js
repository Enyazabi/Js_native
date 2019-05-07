function checkSpam(str) {
    str = str.toLowerCase();
    var firstStr = "viagra";
    var secondStr = "XXX";
    firstStr = firstStr.toLowerCase();
    secondStr = secondStr.toLowerCase();

    if (str.indexOf(secondStr) !== -1 || str.indexOf(firstStr) !== -1) {

        return false;
    }

        return true;

}