/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length

    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1

    const directions = [[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]]

    const visited = new Set()

    const queue = [[0, 0, 1]]

    visited.add(createPositionKey(0, 0))

    while (queue.length > 0) {
        const [row, col, pathLength] = queue.shift()
        
        if (row === n - 1 && col === n - 1) {
            return pathLength
        }

        for (const [dx, dy] of directions) {
            const newRow = row + dx
            const newCol = col + dy

            if (isValidAndUnvisited(grid, newRow, newCol, visited)) {
                visited.add(createPositionKey(newRow, newCol))
                queue.push([newRow, newCol, pathLength + 1])
            }
        }
    }
    return -1
};

function createPositionKey(row, col) {
    return `${row},${col}`
}

function isValidAndUnvisited(grid, row, col, visited) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid.length) return false

    return grid[row][col] === 0 && !visited.has(createPositionKey(row, col))
}