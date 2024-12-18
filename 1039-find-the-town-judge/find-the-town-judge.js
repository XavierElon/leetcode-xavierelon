/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length < n - 1) return -1

    const trustScores = new Array(n+1).fill(0)

    for (const [a, b] of trust) {
        trustScores[a]--
        trustScores[b]++
    }

    for (let i = 1; i <= n; i++) {
        if (trustScores[i] === n - 1) {
            return i
        }
    }

    return -1
};