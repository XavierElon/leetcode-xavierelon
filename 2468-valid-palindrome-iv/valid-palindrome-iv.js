/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    let count = 0

    while (left < right) {
        if (s[left] !== s[right]) {
            count++
        }
        left++
        right--
    }
    if (count > 2) return false
    return true
};