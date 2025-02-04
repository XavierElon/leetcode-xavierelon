function numIslands(grid: string[][]): number {
    if (grid.length === 0) return 0
    const numRows: number = grid.length
    const numCols: number = grid[0].length
    let numIslands: number = 0

    const directions: number[][] = [
        [-1, 0], // Up
        [1, 0], // Down
        [0, -1], // Left
        [0, 1] //Right
    ]

    const bfs = (startRow: number, startCol: number) => {
        const queue: number[][] = []
        queue.push([startRow, startCol])
        grid[startRow][startCol]

        while (queue.length !== 0) {
            const [currentRow, currentCol]: number[] = queue.shift()
            for (const [dRow, dCol] of directions) {
                const newRow: number = dRow + currentRow
                const newCol: number = dCol + currentCol

                if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol])
                    grid[newRow][newCol] = '0'
                }
            }
        }
    }

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] === '1') {
                numIslands++
                bfs(row, col)
            }
        }
    }

    return numIslands
};