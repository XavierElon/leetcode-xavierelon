/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length

    let firstRowHasZero = false
    let firstColHasZero = false

    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true
        }
    }

    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) {
                matrix[i][j] = 0
            }
        }
    }

    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (i = 1; i < rows; i++) {
                matrix[i][j] = 0
            }
        }
    }

    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0
        }
    }
};