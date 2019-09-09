/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// DFS
var levelOrderBottom = function(root) {
    let tree = [];
    helper(root, tree, 0);
    return tree.reverse();
};

const helper = (root, tree, depth) => {
    if (!root) return;
    if (tree[depth]) tree[depth].push(root.val); // already have node in this level
    else tree[depth] = [root.val]; // this level currently don't have any nodes
    root.left && helper(root.left, tree, depth + 1);
    root.right && helper(root.right, tree, depth + 1);
}

// BFS
var levelOrderBottom = function(root) {
    if (!root) return [];
    let queue = [root];
    let rs = [[root.val]];
    while (queue.length > 0) {
        let temp = [];
        for (let i=0;i<queue.length;i++) {
            queue[i].left && temp.push(queue[i].left);
            queue[i].right && temp.push(queue[i].right);
        }
        if (temp.length > 0) {
            rs.push(temp.map(item => item.val));
            queue = [...temp];
        } else break;        
        // console.log(queue);
        // console.log(rs);
        // console.log(temp);
    }
    return rs.reverse();
};
