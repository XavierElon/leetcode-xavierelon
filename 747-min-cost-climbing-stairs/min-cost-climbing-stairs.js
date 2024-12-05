/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    const memo = new Array(n).fill(-1)

    function climb(i) {
        if (i >= n) return 0

        if (memo[i] !== -1) return memo[i]

        const costCurrent = cost[i]

        const costOneStep = climb(i + 1)
        const costTwoSteps = climb(i + 2)

        const minCost = costCurrent + Math.min(costOneStep, costTwoSteps)

        memo[i] = minCost

        return minCost
    }

    return Math.min(climb(0), climb(1))
};