/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const filterNonAlphabet = (str) => {
        return str.replace(/[^0-9a-zA-Z]/g, '')
    }

    s = s.trim().toLowerCase()

    s = filterNonAlphabet(s)

    let left = 0
    let right = s.length -1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }

    return true
};