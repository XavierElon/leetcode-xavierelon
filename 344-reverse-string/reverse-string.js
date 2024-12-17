/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    reverse(0, s.length - 1, s)
};

function reverse(left, right, s) {
    if (left >= right) return

    [s[left], s[right]] = [s[right], s[left]]

    reverse(left + 1, right - 1, s)
}