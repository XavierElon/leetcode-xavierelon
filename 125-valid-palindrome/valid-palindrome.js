/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === null) return true
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let left = 0, right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
};