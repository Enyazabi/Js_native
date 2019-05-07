function extractCurrencyValue(str) {
    cost = +str.slice(1);
    return cost;
}

console.log( extractCurrencyValue('$120'));