function orangesRotting(grid: number[][]): number {
    let freshCount: number = 0
    let rottingOranges: number[] = []
    let rows: number = grid.length
    let cols: number = grid[0].length
    let min: number = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) freshCount++
            else if (grid[i][j] === 2) rottingOranges.push(i * cols + j)
        }
    }

    while (freshCount !== 0 && rottingOranges.length !== 0) {
        const size: number = rottingOranges.length

        for (let i = 0; i < size; i++) {
            const rottenPos: number = rottingOranges.shift()
            const row: number =  Math.floor(rottenPos / cols)
            const col: number = rottenPos % cols

            if (row - 1 >= 0 && grid[row-1][col] === 1) {
                rottingOranges.push((row - 1) * cols + col)
                freshCount--
                grid[row-1][col] = 2
            }

            if (row + 1 < rows && grid[row+1][col] === 1) {
                rottingOranges.push((row + 1) * cols + col)
                freshCount--
                grid[row+1][col] = 2
            }

            if (col - 1 >= 0 && grid[row][col-1] === 1) {
                rottingOranges.push(row * cols + (col - 1))
                freshCount--
                grid[row][col-1] = 2
            }

            if (col + 1 < cols && grid[row][col+1] === 1) {
                rottingOranges.push(row * cols + (col + 1))
                freshCount--
                grid[row][col+1] = 2
            }
        }
        min++
    }

    return freshCount === 0 ? min : -1
};