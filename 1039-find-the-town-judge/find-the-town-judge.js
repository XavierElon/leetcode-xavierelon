/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustsCount = new Array(n + 1).fill(0);
    const trustedByCount = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trustsCount[a]++
        trustedByCount[b]++
    }

    for (let i = 1; i <= n; i++) {
        if (trustedByCount[i] === n - 1 && trustsCount[i] === 0) {
            return i
        }
    }

    return -1
};