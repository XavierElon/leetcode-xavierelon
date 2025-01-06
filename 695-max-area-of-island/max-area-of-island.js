/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) return 0

    let maxArea = 0
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                const currentArea = dfs(grid, directions, r, c)
                maxArea = Math.max(maxArea, currentArea)
            }
        }
    }


    return maxArea
};

function dfs(grid, directions, r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === 0) {
        return 0
    }
    grid[r][c] = 0
    let area = 1

    for (const [dr, dc] of directions) {
        const newR = r + dr
        const newC = c + dc
        area += dfs(grid, directions, newR, newC)

    }

    return area
}