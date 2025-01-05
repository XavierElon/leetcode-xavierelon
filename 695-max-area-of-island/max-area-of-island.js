/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) return 0
    let maxArea = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let area = dfs(grid, r, c)
            maxArea = Math.max(area, maxArea)
        }
    }

    return maxArea
};

function dfs(grid, r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === 0) {
        return 0
    }

    grid[r][c] = 0

    let area = 1
    area += dfs(grid, r-1, c)
    area += dfs(grid, r+1, c)
    area += dfs(grid, r, c-1)
    area += dfs(grid, r, c+1)

    return area
}