/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length

    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1

    const directions = [[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]]

    const queue = [[0,0,1]]

    grid[0][0] = 1

    while (queue.length > 0) {
        const [row, col, pathLength] = queue.shift()

        if (row === n - 1 && col === n - 1) return pathLength

        for (const [dx, dy] of directions) {
            const newRow = row + dx
            const newCol = col + dy

            if (isValid(newRow, newCol, n) && grid[newRow][newCol] === 0) {
                grid[newRow][newCol] = 1
                queue.push([newRow, newCol, pathLength + 1])
            }
        }
    }

    return -1
};

function isValid(row, col, n) {
    return row >= 0 && row < n && col >= 0 && col < n
}