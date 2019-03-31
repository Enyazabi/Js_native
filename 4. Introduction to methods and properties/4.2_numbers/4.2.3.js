function fibBinet(n) {
        a = 1,
        b = 0,
        x,
        n=77;
    for (i = 0; i < n; i++) {
        x = a + b;
        a = b
        b = x;
    }
    return b;

}
alert( fibBinet(n))