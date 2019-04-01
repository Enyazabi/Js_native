function extractCurrencyValue(str){
     price = +str.slice(1)
    return price
}
    alert(extractCurrencyValue('$120'))
