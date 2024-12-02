/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let compareStr = ''

    for (let i = 0; i < words.length; i++) {
        compareStr = compareStr + words[i]
        if (compareStr === s) return true
    }

    return false
};