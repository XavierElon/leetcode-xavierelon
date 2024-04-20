/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let curr = []
    let prev = [1]

    for (let i = 0; i <= rowIndex; i++) {
        curr = new Array(i+1).fill(1)
        for (let j = 1; j < i; j++) {
            curr[j] = prev[j-1] + prev[j]
        }

        prev = curr
    }
    return prev
};