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
 var addTwoNumbers = function(l1, l2) {
    //进位初始化
    let addOne = 0 
    //让sum指向新数组的头地址             
    let sum = new ListNode('0')
    //让head指向新数组的头地址             
    let head = sum
    while (addOne || l1 || l2) {
        //判断l1链表是否为空，若是则补上0（作用是使得l1和l2长度相等，便于相加）
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0
        //逐位求和
        let r1 = val1 + val2 + addOne
        //判断是否有进位
        addOne = r1 >= 10 ? 1 : 0
        //将求和结果赋值给新链表，.next是因为最开始的时候链表指向头地址而非第一个值所在的地址
        sum.next = new ListNode(r1 % 10)
        //指针后移一位
        sum = sum.next 
        if (l1) l1 = l1.next 
        if (l2) l2 = l2.next 
    }
    return head.next
};