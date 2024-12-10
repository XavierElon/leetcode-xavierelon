/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim()
    const words = trimmedString.split(' ')
    const word = words.slice(-1)
    const [newWord] = word
    return newWord.length
}