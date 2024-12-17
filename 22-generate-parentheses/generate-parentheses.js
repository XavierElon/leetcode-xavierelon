/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []

    const backtrack = (currentStr, open, close) => {
        if (currentStr.length / 2 === n) {
            res.push(currentStr)
            return
        }

        if (open < n) {
            backtrack(currentStr + '(', open+1, close)
        }

        if (close < open) {
            backtrack(currentStr + ')', open, close + 1)
        }
    }

    backtrack('', 0, 0)
    return res
};