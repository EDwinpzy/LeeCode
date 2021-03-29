/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
// @lc code=end

