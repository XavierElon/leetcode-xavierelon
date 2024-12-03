/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const map = new Map()

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            map.set(mat[i][j], (map.get(mat[i][j]) || 0) + 1)
        }
    }

    for (let [key, value] of map.entries()) {
        if (value === mat.length) {
            return key
        }
    }

    return -1
};