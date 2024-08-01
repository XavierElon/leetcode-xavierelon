/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix) return []

    const result = []
    let [rowBegin, rowEnd, colBegin, colEnd] = [0, matrix.length - 1, 0 , matrix[0].length - 1]

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse right
        for (let i = colBegin; i <= colEnd; i++) {
            result.push(matrix[rowBegin][i])
        }
        rowBegin++

        // Traverse Down
        for (let i = rowBegin; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd])
        }
        colEnd--

        // Traverse Left
        if (rowBegin <= rowEnd) {
        for (let i = colEnd; i >= colBegin; i--) {
            result.push(matrix[rowEnd][i])
        }
        
        rowEnd--
        }

        // Traverse Up
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result.push(matrix[i][colBegin])
            }
            colBegin++
        }
    }
    return result
}; 