/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    if (s === '1') return 0;
    if (s[s.length - 1] === '0') return numSteps(s.slice(0, s.length - 1)) + 1;
    let newS = [];
    for (let i=0;i<s.length;i++) {
        if (i === 0) {
            newS.unshift('0');
        } else if (i === s.length - 1) {
            newS.unshift('0');
            newS.unshift('1');
            return numSteps(newS.join('')) + 1;
        } else if (s[s.length - i - 1] === '0') {
            newS.unshift('1');
            return numSteps(s.slice(0, s.length - i - 1) + newS.join('')) + 1;
        } else {
            newS.unshift('0');
        }
    }
};
