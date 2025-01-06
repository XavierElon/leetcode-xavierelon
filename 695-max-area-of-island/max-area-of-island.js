/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) return 0
    
    const rows = grid.length
    const cols = grid[0].length
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    let maxArea = 0
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                let area = 0
                const stack = [[r, c]]
                grid[r][c] = 0

                while (stack.length > 0) {
                    const [currentR, currentC] = stack.pop()
                    area++
                    // grid[currentR][currentC] = 0

                    for (const [dr, dc] of directions) {
                        const newR = currentR + dr
                        const newC = currentC + dc

                        if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === 1) {
                            stack.push([newR, newC])
                            grid[newR][newC] = 0
                        }
                    }
                }
                maxArea = Math.max(maxArea, area)
            }
        }
    }

    return maxArea
};