/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const memo = new Map()

    function dp(n) {
        if (n <= 1) return 1

        if (memo.has(n)) return memo.get(n)

        let total = 0

        for (let i = 1; i <= n; i++) {
            total += dp(i-1) * dp(n-i)
        }

        memo.set(n, total)
        return total
    }

    return dp(n)
};