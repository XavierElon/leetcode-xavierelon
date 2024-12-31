/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix) return []

    const res = []

    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++

        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
            bottom--
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left])
            }
            left++
        }
    }

    return res
};