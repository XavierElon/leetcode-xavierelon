/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    const ans = new Array(cols).fill(0).map(() => new Array(rows))
    console.log(ans)

    for (let row = 0; row < cols; row++) {
        for (col = 0; col < rows; col++) {
            ans[row][col] = matrix[col][row]
        }
    }
    return ans
};