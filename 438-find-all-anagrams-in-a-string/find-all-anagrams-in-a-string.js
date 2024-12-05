/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = []
    const map = new Map()
    const windowMap = new Map()

    for (let i = 0; i < p.length; i++) {
        map.set(p[i], (map.get(p[i]) || 0) + 1)
        windowMap.set(s[i], (windowMap.get(s[i]) || 0) + 1)
    }

    function mapsAreEqual(map1, map2) {
        if (map1.size !== map2.size) return false
        for (let [key, value] of map1) {
            if (map2.get(key) !== value) return false
        }
        return true
    }

    if (mapsAreEqual(map, windowMap)) res.push(0)

    for (let i = p.length; i < s.length; i++) {
        const charToAdd = s[i]
        const charToRemove = s[i - p.length]

        windowMap.set(charToAdd, (windowMap.get(charToAdd) || 0) + 1)

        if (windowMap.get(charToRemove) === 1) {
            windowMap.delete(charToRemove)
        } else {
            windowMap.set(charToRemove, (windowMap.get(charToRemove) || 0) - 1)
        }

        if (mapsAreEqual(map, windowMap)) res.push(i - p.length + 1)
    }

    return res

};