/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    if (str2.length === 0) return true
    if (str1.length === 0) return false

    let i = 0
    let j = 0

    const n = str1.length
    const m = str2.length

    const incrementChar = (c) => {
        return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1)
    }

    while (i < n && j < m) {
        if (str1[i] === str2[j]) {
            j++
        } else {
            const incrementedChar = incrementChar(str1[i])
            if (incrementedChar === str2[j]) {
                j++
            }
        }
        i++
    }

    return j === m
};