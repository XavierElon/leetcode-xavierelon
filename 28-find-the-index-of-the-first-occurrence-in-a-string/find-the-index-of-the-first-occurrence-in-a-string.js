/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) return -1
    if (haystack.length === '' || needle.length === '') return 0

    for (let windowStart = 0; windowStart < haystack.length - needle.length + 1; windowStart++) {
        if (haystack[windowStart] === needle[0]) {
            for (let i = 0; i < needle.length; i++) {
                if (needle[i] !== haystack[windowStart + i]) {
                    break
                } else if (i === needle.length - 1) {
                    return windowStart
                }
            }
        }
    }
    return -1
};