/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == '' || haystack == '') return 0
    if (haystack.length < needle.length) return -1

    for (let windowStart = 0; windowStart < haystack.length - needle.length + 1; windowStart++) {
        if (haystack[windowStart] === needle[0])
        for (let j = 0; j < needle.length ; j++) {
            if (needle[j] !== haystack[windowStart + j]) {
                break
            } else if (j === needle.length - 1) {
                return windowStart
            }
        }
    }
    return -1
};