/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = [[]]
    dp[0] = [1]
    if (numRows > 1) dp[1] = [1, 1]

    for (let i = 2; i < numRows; i++) {
        dp[i] = []
        dp[i].push(1)
        
        for (let j = 1; j < i; j++) {
            dp[i].push(dp[i-1][j-1] + dp[i-1][j])
        }
        dp[i].push(1)
    }

    return dp
};