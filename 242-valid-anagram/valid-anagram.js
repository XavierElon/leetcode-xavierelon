/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let freq = new Array(52).fill(0)

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }
        else if (s[i] >= 'A' && s[i] <= 'Z') {
            freq[s.charCodeAt(i) - 'A'.charCodeAt(0)]++
        }

        if (t[i] >= 'a' && s[i] <= 'z') {
            freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }
        else if (t[i] >= 'A' && t[i] <= 'Z') {
            freq[t.charCodeAt(i) - 'A'.charCodeAt(0)]--
        }
    }

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) return false 
    }

    return true
};