/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length

    if (n === 0) return 0
    if (n === 1) return cost[0]
    if (n === 2) return Math.min(cost[0], cost[1])

    const dp = []

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            dp[i] = cost[i]
            continue;
        }
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }

    return Math.min(dp[n-1], dp[n-2])
};