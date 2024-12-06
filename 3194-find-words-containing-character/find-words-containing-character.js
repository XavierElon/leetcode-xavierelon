/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let index = 0
    const res = []
    for (const word of words) {
        for (const char of x) {
            if (word.indexOf(x) !== -1) {
                res.push(index)
            }
        }
        index++
    }

    return res
};