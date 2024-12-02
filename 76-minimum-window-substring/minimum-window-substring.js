/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return ''

    const map = new Array(128).fill(0)
    let count = t.length
    let start = 0
    let minStart = 0
    let minLen = Infinity

    for (let c of t) {
        map[c.charCodeAt(0)]++
    }

    for (let end = 0; end < s.length; end++) {
        if (map[s.charCodeAt(end)]-- > 0) count--

        while (count === 0) {
            if (end - start + 1 < minLen) {
                minStart = start
                minLen = end - start + 1
            }

            if (map[s.charCodeAt(start++)]++ === 0) count++
        }
    }

    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen)
};