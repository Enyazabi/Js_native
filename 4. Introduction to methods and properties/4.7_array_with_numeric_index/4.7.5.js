var numbers = []

while (true) {
    var inputValue = prompt('Enter the number', '0')
    if (inputValue === "" || inputValue === null || isNaN(inputValue) )
        break
    numbers.push(+inputValue)
}

var theSum = 0
for (var i = 0; i < numbers.length; i++) {
    theSum += numbers[i]
}
alert(theSum)




