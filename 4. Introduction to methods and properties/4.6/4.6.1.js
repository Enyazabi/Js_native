function isEmpty(obj){
    var counter=0
        for (prop in obj){
            counter++
        }

        if (counter===0) {

            return 'false'
        }

         return 'true'
}

var schedule = {}

alert( isEmpty(schedule) )

schedule["8:30"] = "подъём"

alert( isEmpty(schedule) )