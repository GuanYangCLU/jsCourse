/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1) {
        return t2;
    }
    helper(t1, t2);
    return t1;
};

const helper = (t1, t2) => {
    if (!t2) return;
    if (t1 && t2) {
        t1.val = t1.val + t2.val;
        if (!t1.left && t2.left) {
            t1.left = t2.left;
            t2.left = null
        }
        if (!t1.right && t2.right) {
            t1.right = t2.right;
            t2.right = null;
        }
        if (t1.left && t2.left) {
            mergeTrees(t1.left, t2.left);
        }
        if (t1.right && t2.right) {
            mergeTrees(t1.right, t2.right);
        }
    }
}
