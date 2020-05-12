/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s) return -1;
    const dic = s.split('').reduce((accum, c, idx) => ({ ...accum, [c]: accum[c] >= -1 ? -1 : idx }), {});
    const res = Object.values(dic).filter(index => index !== -1);
    return res.length ? Math.min(...res) : -1;
};
