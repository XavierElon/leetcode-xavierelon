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
    const flattened = mat.flat()

    const res = new Array(r).fill(0).map(() => new Array(c))

    for (let index = 0; index < flattened.length; index++) {
        res[Math.floor(index/c)][index%c] = flattened[index]
    }

    return res
};