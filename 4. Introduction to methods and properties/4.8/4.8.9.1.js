let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4};

function printList(list) {
    for(let i = 0; i < list.value; i++) {

        console.log( list.value );
        list = list.next;
    }
}

printList(list);