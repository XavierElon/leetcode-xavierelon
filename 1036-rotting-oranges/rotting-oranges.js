/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let freshCount = 0
    const rows = grid.length
    const cols = grid[0].length
    const rottingOranges = []
    let min = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) freshCount++
            else if(grid[row][col] === 2) rottingOranges.push(row * cols + col)
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
                rottingOranges.push((row-1) * cols + col)
            }

            if (row + 1 < rows && grid[row+1][col] === 1) {
                freshCount--
                grid[row+1][col] = 2
                rottingOranges.push((row+1) * cols + col)
            }

            if (col - 1 >= 0 && grid[row][col-1] === 1) {
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