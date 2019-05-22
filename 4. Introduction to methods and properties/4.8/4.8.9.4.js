let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4};

function printReverseList(list) {
    let arr = [];
    let temp = list;

    console.log(temp.value);
    return printReverseList(temp.next);

    for (let i = arr.length -1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverseList(list);