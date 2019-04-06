var animalSounds = ['meow','woof','moo','quack']
function findValue (animalSounds, value) {
    for(i=0; i<animalSounds.length; i++) {
        (animalSounds[i]===value) ? alert(i) : alert(-1)
    }
}


findValue(animalSounds,'quack')




