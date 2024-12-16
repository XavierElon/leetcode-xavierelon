/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]

    const prevRow = getRow(rowIndex - 1)
    const currentRow = []
    currentRow.push(1)

    for (let i = 1; i < prevRow.length; i++) {
        currentRow.push(prevRow[i-1] + prevRow[i])
    }

    currentRow.push(1)

    return currentRow
};