/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeArr = [head];
    const dummy = new ListNode(0);
    let cur = head;
    dummy.next = cur;
    while (cur.next) {
        nodeArr.push(cur.next);
        cur = cur.next;
    }
    const len = nodeArr.length;
    if (len <= n) {
        return dummy.next.next;
    }
    nodeArr[len-n-1].next = n-1 > 0 ? nodeArr[len+1-n] : null;
    return dummy.next;
};
