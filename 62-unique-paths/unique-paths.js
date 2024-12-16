/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = new Map()

    function recurse(rows, cols) {
        if (rows === 1 || cols === 1) {
            return 1
        }
        const key = rows + ',' + cols
        if (memo.has(key)) return memo.get(key)

        const result = recurse(rows-1, cols) + recurse(rows, cols - 1)

        memo.set(key, result)

        return result
    }

    return recurse(m, n)
};