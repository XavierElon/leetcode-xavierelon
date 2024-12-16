/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = new Map()

    function lcs(i, j) {
        if (i === text1.length || j === text2.length) return 0

        const key = i + ',' + j

        if (memo.has(key)) return memo.get(key)

        let result

        if (text1[i] === text2[j]) {
            result = 1 + lcs(i + 1, j + 1)
        } else {
            result = Math.max(
                lcs(i + 1, j),
                lcs(i, j + 1)
            )
        }

        memo.set(key, result)
        return result
    }

    return lcs(0, 0)
};