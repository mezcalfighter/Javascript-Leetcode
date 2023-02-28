var reverseList = function(head) {
    let prev = null
    let current = head
    while(current){
        let temp = current.next
        //change direction
        current.next = prev
        // move prev and current up by one
        prev = current
        current = temp
    }
    return prev
};