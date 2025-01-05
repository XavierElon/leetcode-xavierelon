/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0) return []

    const rows = heights.length
    const cols = heights[0].length 

    const pacific = new Set()
    const atlantic = new Set()

    const getCellKey = (row, col) => `${row},${col}`

    function dfs(row, col, visited, prevHeight) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || visited.has(getCellKey(row, col))) {
            return
        }

        if (heights[row][col] < prevHeight) {
            return
        }

        visited.add(getCellKey(row, col))

        const directions = [[1,0],[-1,0],[0,1],[0,-1]]

        for (const [dx, dy] of directions) {
            dfs(row + dx, col + dy, visited, heights[row][col])
        }
    }

    for (let col = 0; col < cols; col++) {
        dfs(0, col, pacific, heights[0][col])
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pacific, heights[row][0])
    }

    for (let col = 0; col < cols; col++) {
        dfs(rows - 1, col, atlantic, heights[rows-1][col])
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, cols-1, atlantic, heights[row][cols-1])
    }

    const result = []

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cellKey = getCellKey(row, col)
            if (pacific.has(cellKey) && atlantic.has(cellKey)) {
                result.push([row, col])
            }
        }
    }

    return result
};