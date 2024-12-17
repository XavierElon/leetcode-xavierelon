/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let length = s.length

    if (length <= 1) return true

    if (s[0] === s[length-1]) {
        let substring = s.substring(1, length - 1)
        return isPalindrome(substring)
    }
    return false
};
