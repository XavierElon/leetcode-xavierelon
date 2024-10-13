function islandPerimeter(grid: number[][]): number {
    let perimeterCount: number = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                if (i === 0 || grid[i-1][j] === 0) {
                    perimeterCount++
                }
                if (i === grid.length - 1 || grid[i+1][j] === 0) {
                    perimeterCount++
                }
                if (j === 0 || grid[i][j-1] === 0) {
                    perimeterCount++
                }
                if (j === grid[0].length - 1 || grid[i][j+1] === 0) {
                    perimeterCount++
                }
            }
        }
    }
    return perimeterCount
};