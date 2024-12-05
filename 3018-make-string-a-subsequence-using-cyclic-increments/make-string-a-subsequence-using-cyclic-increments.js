/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    if (str1.length === 0) return false
    if (str2.length === 0) return true
    const m = str1.length
    const n = str2.length
    let i = 0
    let j = 0

    const getNextChar = (c) => {
        return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1)
    }

    while (i < m && j < n) {
        if (str1[i] === str2[j]) {
            j++
        } else {
            const nextChar = getNextChar(str1[i])
            if (nextChar === str2[j]) {
                j++
            }
        }
        i++
    }

    return j === n
};