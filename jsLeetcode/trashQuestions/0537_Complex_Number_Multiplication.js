/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    const cpA = a.split('+');
    const cpB = b.split('+');
    const cpA0 = Number(cpA[0])
    const cpA1 = Number(cpA[1].slice(0,-1));
    const cpB0 = Number(cpB[0]);
    const cpB1 = Number(cpB[1].slice(0,-1));
    const cpR0 = cpA0 * cpB0 - cpA1 * cpB1;
    const cpR1 = cpA0 * cpB1 + cpA1 * cpB0;
    const rs = `${cpR0}+${cpR1}i`;
    return rs;
};
