/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//快慢指针法
var removeNthFromEnd = function(head, n) {
    let hare = head, curr = head;
    while (n--) {
        hare = hare.next;
    }
    while (hare && hare.next) {
        curr = curr.next;
        hare = hare.next;
    }
    //此时curr指向需要删除节点的前一个结点，hare指向末尾的null
    if (!hare) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};
console.log(removeNthFromEnd([1, 2, 3, 4], 2))