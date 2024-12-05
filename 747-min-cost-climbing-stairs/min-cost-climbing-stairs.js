/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    const memo = new Map()

    function dfs(i) {
        if (i === 0 || i === 1) return cost[i]
        if (memo.has(i)) return memo.get(i)

        const minCost = cost[i] + Math.min(dfs(i-1), dfs(i-2))

        memo.set(i, minCost)
        return minCost
    }

    return Math.min(dfs(n - 1), dfs(n - 2))
};