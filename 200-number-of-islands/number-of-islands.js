/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0
    grid.map((r, x) => {
        r.map((c, y) => {
            if (grid[x][y] === '1') {
                num++
                removeIslandBFS(grid, x, y)
            }
        })
    })
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