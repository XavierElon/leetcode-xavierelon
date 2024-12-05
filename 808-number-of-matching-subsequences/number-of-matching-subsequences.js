/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let res = 0

    for (const word of words) {
        let index = -1
        let match = 0

        for (const c of word) {
            const currentIndex = s.indexOf(c, index + 1)

            if (currentIndex > index) {
                match++
                index = currentIndex
                continue
            }
            break
        }

        if (match === word.length) {
            res++
        }
    }

    return res
};