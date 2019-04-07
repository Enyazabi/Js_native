var animalSounds = ['meow','woof','moo','quack']
var index = findValue(animalSounds, 3)
function findValue (animalSounds, value) {
    for(var i=0; i<animalSounds.length; i++) {
       if (animalSounds[i]===value) return i
    }
       return -1
    }

alert(index)




