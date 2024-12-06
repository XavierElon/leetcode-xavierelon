/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false
    if (s.length === 0) return true
    let pointer1 = 0
    let pointer2 = 0
    const m = s.length
    const n = t.length

    while (pointer1 < m && pointer2 < n) {
        if (s[pointer1] === t[pointer2]) {
            pointer1++
        }
        pointer2++
    }
    return pointer1 === s.length
};