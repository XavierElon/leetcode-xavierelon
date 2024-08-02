/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const rows = mat.length
    const cols = mat[0].length
    if (r * c !== rows * cols) {
        return mat
    }
    
    const result = []
    let row = []

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            row.push(mat[i][j])
            if (row.length === c) {
                result.push(row)
                row=[]
            }
        }
    }

    return result
};