/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let i = 0
    let j = 0
    const n = start.length 

    while (i < n || j < n) {
        while (i < n && start[i] === '_') i++
        while (j < n && target[j] === '_') j++

        if (i === n || j ===n) break

        if (start[i] !== target[j]) return false

        if (start[i] === 'L' && i < j) return false
        if (start[i] === 'R' && i > j) return false

        i++
        j++
    }

    return i === n && j === n
};