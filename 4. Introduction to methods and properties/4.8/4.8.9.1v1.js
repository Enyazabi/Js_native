let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4};

function printList(list) {
    let temp = list;

    console.log(temp.value);
    return printList(temp.next);
}

printList(list);