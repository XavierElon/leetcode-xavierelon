/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]]
    }

    const triangle = generate(numRows - 1)
    const prevRow = triangle[triangle.length - 1]
    const currentRow = []

    currentRow.push(1)

    for (let i = 1; i < prevRow.length; i++) {
        currentRow.push(prevRow[i-1] + prevRow[i])
    }

    currentRow.push(1)

    triangle.push(currentRow)
    return triangle
};