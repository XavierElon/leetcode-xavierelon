/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length
    if (grid[0][0] !== 0 || grid[n-1][n-1] !== 0) {
        return -1
    }

    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]
    ]

    const visited = new Array(n).fill(null).map(() => new Array(n).fill(false))
    visited[0][0] = true

    const queue = [[0, 0, 1]]

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift()

        if (x === n - 1 && y === n - 1) {
            return dist
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx
            const ny = y + dy

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] === 0) {
                visited[nx][ny] = true
                queue.push([nx, ny, dist+1])
            }
        }
    }
    return -1
};