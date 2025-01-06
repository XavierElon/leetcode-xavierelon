/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1') {
                num++
                removeIslandBFS(grid, r, c)
            }
        }
    }
    return num
};

function removeIslandBFS(grid, r, c) {
    let stack = []
    stack.push([r, c])

    while (stack.length > 0) {
        const [r, c] = stack.pop()
        grid[r][c] = '0'
        add(stack, grid, r+1, c)
        add(stack, grid, r-1, c)
        add(stack, grid, r, c+1)
        add(stack, grid, r, c-1)
    }
}

function add(stack, grid, r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
        return
    }

    stack.push([r, c])
}