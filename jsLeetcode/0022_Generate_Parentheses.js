/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n < 1) return [];
    return helper(0, n, '', 0, 0);
};
    
const helper = (depth, n, str, l, r) => {
    if (r > n || l > n) return [];
    if (r > l) return [];
    if (depth === n * 2) return [str];
    return [ ...helper(depth + 1, n, str + '(', l + 1, r),
    ...helper(depth + 1, n, str + ')', l, r + 1) ];
}
