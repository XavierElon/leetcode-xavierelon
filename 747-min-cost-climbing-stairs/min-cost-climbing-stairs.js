/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length

    if (n === 0) return 0
    if (n === 1) return cost[0]
    if (n === 2) return Math.min(cost[0], cost[1])

    const dp = new Array(n + 1).fill(0)

    dp[0] = 0
    dp[1] = 0

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }

    return dp[n]
};