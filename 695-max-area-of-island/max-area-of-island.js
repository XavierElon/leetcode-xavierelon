/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const res = { count: 0 }
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            dfs(grid, r, c, res)
        }
    }

    return res.count
};

const dfs = (grid, r, c, res, area = { count: 0 }) => {
    if (!grid[r] || !grid[r][c]) return

    res.count = Math.max(res.count, area.count += grid[r][c])
    grid[r][c] = 0
    dfs(grid, r, c-1, res, area)
    dfs(grid, r, c+1, res, area)
    dfs(grid, r-1, c, res, area)
    dfs(grid, r+1, c, res, area)
}