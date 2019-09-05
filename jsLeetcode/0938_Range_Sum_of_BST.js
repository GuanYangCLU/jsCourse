/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) return 0;
    let arr = [];
    helper(root,L,R,arr);
    return arr.slice(arr.indexOf(L), arr.indexOf(R)+1).reduce((a,b) => a+b);
    
};

var helper = function(root, L, R, arr) {
    if (!root) {
        arr.push(0);
        return
    }  
    helper(root.left, L, R, arr);   
    arr.push(root.val);
    helper(root.right, L, R, arr);
};
