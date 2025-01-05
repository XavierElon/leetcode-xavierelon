/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                num++
                removeIslandBFS(grid, row, col)
            }
        }
    }
    return num
};

function removeIslandBFS(grid, row, col) {
    let stack = []
    stack.push({row, col}) 
    
    while (stack.length > 0) {
        const {row, col} = stack.pop()
        grid[row][col] = '0'
        add(stack, grid, row+1, col)
        add(stack, grid, row-1, col)
        add(stack, grid, row, col+1)
        add(stack, grid, row, col-1)
    }
}

function add(stack, grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') {
        return
    }
    stack.push({row, col})
}