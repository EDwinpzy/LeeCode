/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    //递归出口（必须有）
    if(!head || !head.next) return head;
    let n1 = head;
    let n2 = head.next;
    let n3 = n2.next;
    n2.next = n1;
    n1.next = swapPairs(n3);
    return n2;
};
// @lc code=end

