/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    if (!A) return [];
    // map doesn't change old array
    const B = A.map(n => n*n).sort((a,b) => a - b);
    return B;
};
