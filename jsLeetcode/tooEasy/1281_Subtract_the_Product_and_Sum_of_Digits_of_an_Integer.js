/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = n.toString().split('');
    const prod = arr.reduce((accum, x) => x * accum, 1);
    const sum = arr.reduce((accum, x) => x * 1 + accum, 0);
    return prod - sum;
};
