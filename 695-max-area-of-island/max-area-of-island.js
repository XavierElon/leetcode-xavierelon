/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) return 0
    
    let maxArea = 0
    const directions = [[-1,0], [1,0], [0,-1], [0,1]]

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c]) {
                let area = 0
                const stack = [[r,c]]
                grid[r][c] = 0

                while (stack.length > 0) {
                    const [currentR, currentC] = stack.pop()
                    area++

                    for (const [dr, dc] of directions) {
                        const newR = currentR + dr
                        const newC = currentC + dc

                        if (newR >= 0 && newC >= 0 && newR < grid.length && newC < grid[0].length && grid[newR][newC] === 1) {
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

