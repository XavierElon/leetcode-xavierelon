/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false

    const s1Map = new Map()
    const windowMap = new Map()

    for (let char of s1) {
        s1Map.set(char, (s1Map.get(char) || 0) + 1)
    }

    for (let i = 0; i < s1.length; i++) {
        const char = s2[i]
        windowMap.set(char, (windowMap.get(char) || 0) + 1)
    }

    function mapsAreEqual(map1, map2) {
        if (map1.size !== map2.size) return false
        for (let [key, value] of map1) {
            if (map2.get(key) !== value) return false
        }
        return true
    }

    if (mapsAreEqual(s1Map, windowMap)) return true

    for (let i = s1.length; i < s2.length; i++) {
        const charToAdd = s2[i]
        const charToRemove = s2[i - s1.length]

        windowMap.set(charToAdd, (windowMap.get(charToAdd) || 0) + 1)

        if (windowMap.get(charToRemove) === 1) {
            windowMap.delete(charToRemove)
        } else {
            windowMap.set(charToRemove, windowMap.get(charToRemove) - 1)
        }

        if (mapsAreEqual(s1Map, windowMap)) return true
    }

    return false
};