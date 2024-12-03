/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    const n = s.length
    const reversed = s.split('').reverse().join('')
    let previous = Array(n+1).fill(0)
    let current = Array(n+1).fill(0)

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === reversed[j - 1]) {
                current[j] = previous[j - 1] + 1
            } else {
                current[j] = Math.max(previous[j], current[j - 1])
            }
        }

        [previous, current] = [current, previous]
    }

    const lps = previous[n]
    return (n - lps) <= k
};