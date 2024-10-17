function orangesRotting(grid: number[][]): number {
    let freshCount: number = 0
    let rottenOranges: number[] = []
    let rowCount: number = grid.length
    let colCount: number = grid[0].length
    let min: number = 0

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (grid[i][j] === 1) freshCount++
            else if (grid[i][j] === 2) rottenOranges.push(i * colCount + j)
        }
    }

    while (freshCount !== 0 && rottenOranges.length !== 0) {
        const size: number = rottenOranges.length

        for (let i = 0; i < size; i++) {
            const rottenPos: number = rottenOranges.shift()
            const row: number = Math.floor(rottenPos / colCount)
            const col: number = rottenPos % colCount

            if (row - 1 >= 0 && grid[row-1][col] === 1) {
                rottenOranges.push((row - 1) * colCount + col)
                grid[row-1][col] = 2
                freshCount--
            }

            if (row + 1 < rowCount && grid[row+1][col] === 1) {
                rottenOranges.push((row+1) * colCount + col)
                grid[row+1][col] = 2
                freshCount--
            }

            if (col - 1 >= 0 && grid[row][col-1] === 1) {
                rottenOranges.push(row * colCount + (col - 1))
                grid[row][col-1] = 2
                freshCount--
            }

            if (col + 1 < colCount && grid[row][col+1] === 1) {
                rottenOranges.push(row * colCount + (col + 1))
                grid[row][col+1] = 2
                freshCount--
            }
        }
        min++
    }

    return freshCount === 0 ? min : -1
};