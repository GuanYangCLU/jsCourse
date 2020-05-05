/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let res = [], level = [root];
    while (level.length) {
        res.push(level[level.length - 1].val);
        level = level.reduce((accum, node) => [ ...accum, node.left, node.right].filter(node => !!node), []);
    }
    return res;
};
