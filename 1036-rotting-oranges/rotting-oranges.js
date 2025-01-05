/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let freshCount = 0
    let min = 0
    const rottingOranges = []
    const rows = grid.length
    const cols = grid[0].length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) freshCount++
            else if (grid[r][c] === 2) rottingOranges.push(r * cols + c)
        }
    }

    while (freshCount !== 0 && rottingOranges.length !== 0) {
        const size = rottingOranges.length

        for (let i = 0; i < size; i++) {
            const rottenPos = rottingOranges.shift()
            const row = Math.floor(rottenPos / cols)
            const col = rottenPos % cols

            if (row - 1 >= 0 && grid[row-1][col] === 1) {
                freshCount--
                grid[row-1][col] = 2
                rottingOranges.push((row - 1) * cols + col)
            }

            if (row + 1 < rows && grid[row+1][col] === 1) {
                freshCount--
                grid[row+1][col] = 2
                rottingOranges.push((row + 1) * cols + col)
            }

            if (col -1 >= 0 && grid[row][col-1] === 1) {
                freshCount--
                grid[row][col-1] = 2
                rottingOranges.push(row * cols + col - 1)
            }

            if (col + 1 < cols && grid[row][col+1] === 1) {
                freshCount--
                grid[row][col+1] = 2
                rottingOranges.push(row * cols + col + 1)
            }
        }
        min++
    }

    return freshCount === 0 ? min : -1
};