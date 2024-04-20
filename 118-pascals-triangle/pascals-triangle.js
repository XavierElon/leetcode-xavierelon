/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = []

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        const row = new Array(rowNum + 1)
        row[0] = 1
        row[rowNum] = 1

        for (let j = 1; j < row.length -1; j++) {
            row[j] = triangle[rowNum - 1][j - 1] + triangle[rowNum - 1][j]
        }

        triangle.push(row)
    }
    return triangle
};