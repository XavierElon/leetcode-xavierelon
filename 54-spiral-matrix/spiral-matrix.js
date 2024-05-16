/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    if (matrix.length === 0) return res

    let rowBegin = 0
    let rowEnd = matrix.length - 1
    let colBegin = 0
    let colEnd = matrix[0].length - 1

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let i = colBegin; i <= colEnd; i++) {
            res.push(matrix[rowBegin][i])
        }
        rowBegin++

        for (let i = rowBegin; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd])
        }
        colEnd--

        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                res.push(matrix[rowEnd][i])
            }
            rowEnd--
        }

        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin])
            }
            colBegin++
        }
    }
    return res
};
