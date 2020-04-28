/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = { val: 0 };
    helper(root, sum);
    return sum.val;
};
    
const helper = (node, sum) => {
    if (!node) return;
    if (node.left) {
        const isTarget = !node.left.left && !node.left.right;
        if (isTarget) {
            sum.val += node.left.val;
        } else{
            helper(node.left, sum);
        }
    }
    if (node.right) {
        helper(node.right, sum);
    }
    if (!node.left && !node.right) return;
}
