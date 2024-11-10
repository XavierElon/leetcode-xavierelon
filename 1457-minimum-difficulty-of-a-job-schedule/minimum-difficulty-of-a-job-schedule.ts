function minDifficulty(jobDifficulty: number[], d: number): number {
    const n  = jobDifficulty.length

    if (n < d) return -1

    const dp: number[][] = Array.from({ length: d + 1 }, () => 
        Array(n + 1).fill(Infinity)
    )

    dp[0][0] = 0

    for (let k = 1; k <= d; k++) {
        for (let i = k; i <= n; i++) {
            let currentMax: number = 0
            for (let j = i - 1; j >= k - 1; j--) {
                currentMax = Math.max(currentMax, jobDifficulty[j])
                if (dp[k - 1][j] !== Infinity) {
                    dp[k][i] = Math.min(dp[k][i], dp[k - 1][j] + currentMax)
                }
            }
        }
    }

    return dp[d][n] === Infinity ? -1 : dp[d][n]
};