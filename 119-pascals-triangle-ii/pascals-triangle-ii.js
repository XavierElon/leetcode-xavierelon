/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1]
    let prev = 1

    for (let k = 1; k <= rowIndex; k++) {
        next = prev * (rowIndex - k + 1) / k
        prev = next
        res.push(next)
    }
    return res
};

// (n - r + 1) / r