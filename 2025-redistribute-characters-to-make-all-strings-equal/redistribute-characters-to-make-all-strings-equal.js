/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const length = words.length
    const map = new Map()

    for (const word of words) {
        for (const char of word) {
            map.set(char, (map.get(char) || 0) + 1)
        }
    }

    for (const count of map.values()) {
        if (count % length !== 0) {
            return false
        }
    }

    return true
};