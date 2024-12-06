/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false
    if (s.length === 0) return true

    let sPointer = 0
    let tPointer = 0

    const m = s.length
    const n = t.length

    while (sPointer < m && tPointer < n) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++
        }
        tPointer++
    }

    return sPointer === m
};