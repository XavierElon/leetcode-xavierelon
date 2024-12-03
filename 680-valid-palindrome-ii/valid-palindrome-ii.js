/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }

    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }

        left++
        right--
    }

    return true
};