/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const dp = new Array(high+1).fill(0)
    const MOD = 1000_000_007

    for (let i = high; i >= 0; i--) {
        dp[i] += (low <= i && i <= high) ? 1 : 0
        if (i + zero <= high) {
            dp[i] += dp[i + zero]
        }
        if (i + one <= high) {
            dp[i] += dp[i + one]
        }
        dp[i] %= MOD
    }

    return dp[0]
};