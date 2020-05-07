/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let dep = 0, level = [root].filter(node => !!node);
    while (level.length) {
        dep ++;
        level = level.reduce((accum, node) => ([ ...accum, ...node.children ]).filter(node => !!node), []);
    }
    return dep;
};
