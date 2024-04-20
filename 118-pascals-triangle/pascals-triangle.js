/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = []

    for (let rowNumber = 0; rowNumber < numRows; rowNumber++) {
        let row = new Array(rowNumber + 1)
        row[0] = 1
        row[row.length - 1] = 1

        for (let j = 1; j < row.length-1; j++) {
            row[j] = triangle[rowNumber - 1][j-1] + triangle[rowNumber - 1][j]
        }

        triangle.push(row)
    }
    return triangle
};