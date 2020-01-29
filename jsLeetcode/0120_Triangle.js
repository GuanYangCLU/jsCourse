/**
 * @param {number[][]} triangle
 * @return {number}
 */
 
 // hint: bottom up, must get the minium
 
var minimumTotal = function(triangle) {
    const h = triangle.length;
    triangle.push(Array(h+1).fill(0));
    for (let i=h-1; i>=0; i--) {
        for (let j=0; j<=i; j++) {
            triangle[i][j] = triangle[i][j] + Math.min(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }
    return triangle[0][0];
};
