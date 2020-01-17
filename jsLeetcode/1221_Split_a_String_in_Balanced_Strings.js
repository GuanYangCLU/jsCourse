/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let output = 0;
    let balanceMark = 0;
    const val = { L: 1, R: -1 };
    for (let i=0;i < s.length; i++) {
        balanceMark += val[s[i]];
        if (balanceMark === 0) output += 1;
    }
    return output;
};
