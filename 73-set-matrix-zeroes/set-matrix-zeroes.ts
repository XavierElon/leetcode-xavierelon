/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    if (matrix.length === 0 || matrix[0].length === 0) return
    const m: number = matrix.length
    const n: number = matrix[0].length

    let firstRowHasZero: boolean = false
    let firstColHasZero: boolean = false

    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true
            break
        }
    }

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true
            break
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0
            }
        }
    }

    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < m; i++) {
                matrix[i][j] = 0
            }
        }
    }

    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }
};