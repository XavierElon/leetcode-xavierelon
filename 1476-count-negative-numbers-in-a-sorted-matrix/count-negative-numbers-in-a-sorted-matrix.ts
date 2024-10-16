function countNegatives(grid: number[][]): number {
    const m: number = grid.length
    const n: number = grid[0].length
    let count: number = 0
    let row: number = m - 1
    let col: number = 0

    while (row >= 0 && col < n) {
        if (grid[row][col] < 0) {
            count += n - col
            row--
        } else {
            col++
        }
    }
    return count
};