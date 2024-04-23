/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = new Array(rowIndex+1).fill(1)

    for (let i = 0; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            res[j] = res[j] + res[j-1]
        }
    }
    return res
};