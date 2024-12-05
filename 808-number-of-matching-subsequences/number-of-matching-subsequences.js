/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    const bucket = [...Array(26)].map(() => [])
    let counter = 0

    function getCharId(char) {
        return char.charCodeAt() - 'a'.charCodeAt()
    }

    for (let word of words) {
        const index = getCharId(word[0])
        bucket[index].push(word)
    }

    for (let char of s) {
        const index = getCharId(char)
        const currentBucket = bucket[index]
        bucket[index] = []

        for (let word of currentBucket) {
            word = word.slice(1)
            if (!word.length) {
                counter++
                continue
            }
            const nextIndex = getCharId(word[0])
            bucket[nextIndex].push(word)
        }
    }
    return counter
};