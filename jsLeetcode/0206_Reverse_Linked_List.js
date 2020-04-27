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
var reverseList = function(head) {
    return helper(head);
};
    
const helper = (node) => {
    if (!node || !node.next) return node;
    else {
        prevSome = helper(node.next);
        prevTail = node.next; // reset the empty cut tail
        prevTail.next = node;
        node.next = null // join us and cut off your tail
        return prevSome;
    }
}

// 1, [2,3,4,5] -> func([...inside]) => res -> 1
// 2, [3,4,5]-> func([...rest]) => res -> 2 -> 1
