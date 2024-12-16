/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Map()

    function helper(steps) {
        if (memo.has(steps)) return memo.get(steps)

        if (steps === 1) return 1
        if (steps === 2) return 2

        const result = helper(steps-1) + helper(steps-2)

        memo.set(steps, result)

        return result
    }

    if (n === 0) return 0

    return helper(n)
};