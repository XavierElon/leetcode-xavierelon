/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) return true
    if (n === 0 || n === 2) return false
    if (n === 3) return true

    return isPowerOfThree(n/3)
};