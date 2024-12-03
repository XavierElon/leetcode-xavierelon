/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let ans = ''
    let spacesIndex = 0
    let spacesLength = spaces.length
    let sIndex = 0

    for (let i = 0; i < s.length; i++) {
        if (spacesIndex < spacesLength && spaces[spacesIndex] === i) {
            ans += ' '
            spacesIndex++
        } 
        ans += s[i]
    }

    return ans
};