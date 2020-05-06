/**
 * @param {character[][]} grid
 * @return {number}
 */
 // 逆向思维： 淹没法
var numIslands = function(grid) {
    if (!grid.length) return 0;
    let res = 0;
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[0].length;j++) {
            if (grid[i][j] === '1') {
                // every time after drown a whole area, recursion all return and back to cycle
                res ++;
                inundate(grid, i, j); // start inundating ...
            }
        }
    }
    return res;
};

const inundate = (grid, row, col) => {
    if (grid[row] && grid[row][col] && grid[row][col] === '1') {
        grid[row][col] = 0; // flood drown 1 area, and continue to other area
        inundate(grid, row - 1, col);
        inundate(grid, row + 1, col);
        inundate(grid, row, col - 1);
        inundate(grid, row, col + 1);
    }
}
