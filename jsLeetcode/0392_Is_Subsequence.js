/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const sArr = s.split('');
    let curT = t;
    for (let i=0; i<sArr.length; i++) {
        const idx = curT.indexOf(sArr[i]);
        if (idx === -1) return false;
        curT = curT.slice(idx+1);
    }
    return true;
};
