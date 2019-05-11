var i;


for (var i = 2; i <= 100; i++) {
    if (i == 2) {
        console.log(i)
    }

    if ((i % 2 != 0) && (i !=2)) {
        if (i == 3) {
            console.log(i)
        }

        if ((i % 3 != 0) && (i !=3)) {
            if (i == 5) {
                console.log(i)
            }

            if ((i % 5 != 0) && (i !=5)) {
                if (i == 7) {
                    console.log(i)
                }

                if ((i % 7 != 0) && (i !=7)) {
                    console.log(i)
                }
            }
        }
    }
}