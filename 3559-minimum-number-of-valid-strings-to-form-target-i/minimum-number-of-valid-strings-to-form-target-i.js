/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function(words, target) {
    const aCode = 97
    function getLetter(str, i) {
        return str.charCodeAt(i) - aCode
    }

    const root = []
    for (const word of words) {
        const size = word.length
        for (let i = 0, p = root; i < size; i++) {
            const letter = getLetter(word, i)
            const existing = p[letter]
            if (existing !== undefined) {
                p = existing
            } else {
                const node = []
                p[letter] = node
                p = node
            }
        }
    }


    const len = target.length
    const table = new Array(len + 1)
    table[len] = 0
    
    function dp(fromIndex) {
        const existing = table[fromIndex]
        if (existing !== undefined) return existing

        let result = Infinity
        for (let i = fromIndex, p = root; i < len; i++) {
            const letter = getLetter(target, i)
            const node = p[letter]
            if (node === undefined) {
                break
            }
            p = node

            const subresult = dp(i + 1)
            const outcome = 1 + subresult
            result = Math.min(result, outcome)
        }

        return table[fromIndex] = result
    }


    let result = dp(0)
    if (result === Infinity)    result = -1
    return result
};