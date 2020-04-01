/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    helper(dummy);
    return dummy.next;
};

const helper = (node) => {
    if (!node.next) return null;
    if (!node.next.next) return node.next;
    let temp = node.next.next;
    node.next.next = node.next.next.next;
    temp.next = node.next;
    node.next = temp;
    return helper(node.next.next);
}
