/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(0);
    dummy.next = head;
    helper(dummy, val);
    return dummy.next;
};

const helper = (node, val) => {
    if (node && node.next) {
        if (node.next.val === val) {
            // console.log('goal', node.next.val, node.next.next);
            node.next = node.next.next;
            helper(node, val);
        } else {
            // console.log('pass');
            helper(node.next, val);
        }
    }
    // console.log('out');
    return;
}
