/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);
    let preh = prehead;
    while(l1 != null && l2 != null){
        if(l1.val <= l2.val){
            preh.next = l1;
            l1 = l1.next;
        }else{
            preh.next = l2;
            l2 = l2.next;
        }
        preh = preh.next;
    }
    preh.next = l1 == null ? l2 : l1;
    return prehead.next;
};


//递归算法
// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null){
//         return l2;
//     }    
//     if(l2 === null){
//         return l1;
//     }
//     if(l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }else{
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };
// @lc code=end

