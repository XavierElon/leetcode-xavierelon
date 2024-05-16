/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == '1') {
                num++
                removeIslandBFS(grid, row, col)
            }
        }
    }
    return num
};

const removeIslandBFS = (grid, x, y) => {
    let stack = []
    stack.push({x, y})
    while (stack.length > 0) {
        const {x, y} = stack.pop()
        grid[x][y] = '0'
        add(stack, grid, x+1, y)
        add(stack, grid, x-1, y)
        add(stack, grid, x, y+1)
        add(stack, grid, x, y-1)
    }
}

const add = (stack, grid, x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] == '0') {
        return
    }
    stack.push({x, y})
}