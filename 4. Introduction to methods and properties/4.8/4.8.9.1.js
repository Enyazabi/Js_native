let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4};

function printList(list) {
    for(let i = 0; i < list.value; i++) {
        list = list.next;

        console.log( list.value );
    }
}

printList(list);