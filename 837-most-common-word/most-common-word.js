/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/\W+/g)
    let maxCount = 0
    let maxStr = ''
    const bannedSet = new Set(banned)
    const freqMap = new Map()

    for (const word of words) {
        if (!bannedSet.has(word)) {
            freqMap.set(word, (freqMap.get(word) || 0) + 1)
            if (freqMap.get(word) > maxCount) {
                maxCount = freqMap.get(word)
                maxStr = word
            }
        }
    }

    return maxStr

};