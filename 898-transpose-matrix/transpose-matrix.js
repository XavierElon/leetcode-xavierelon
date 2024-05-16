/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    const ans = []

    for (let row = 0; row < cols; row++) {
        const temp = []
        for (let col = 0; col < rows; col++) {
            temp.push(matrix[col][row])
        }
        ans.push(temp)
    }
    return ans
};