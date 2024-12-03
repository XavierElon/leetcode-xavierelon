/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let ans = []
    let spacesIndex = 0

    for (let i = 0; i < s.length; i++) {
        if (spacesIndex < spaces.length && spaces[spacesIndex] === i) {
            ans.push(' ')
            spacesIndex++
        }
        ans.push(s[i])
    }

    return ans.join('')
};