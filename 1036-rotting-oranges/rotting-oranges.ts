function orangesRotting(grid: number[][]): number {
    const rows: number = grid.length
    const cols: number = grid[0].length
    const rottingOranges: number[] = []
    let freshCount: number = 0
    let min: number = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                rottingOranges.push(i * cols + j)
            } else if (grid[i][j] === 1) freshCount++
        }
    }

    while (freshCount !== 0 && rottingOranges.length !== 0) {
        const size: number = rottingOranges.length
        
        for (let i = 0; i < size; i++) {
            const rottenPos: number = rottingOranges.shift()
            const row: number = Math.floor(rottenPos / cols)
            const col: number = rottenPos % cols

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

            if (col - 1 >= 0 && grid[row][col-1] === 1) {
                freshCount--
                grid[row][col-1] = 2
                rottingOranges.push(row * cols + (col - 1))
            }

            if (col + 1 < cols && grid[row][col+1] === 1) {
                freshCount--
                grid[row][col+1] = 2
                rottingOranges.push(row * cols + (col + 1))
            }
        }
        min++
    }
    return freshCount === 0 ? min : -1 
};