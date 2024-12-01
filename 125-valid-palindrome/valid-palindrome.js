/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const filterNonAlphabet = (str) => {
        return str.replace(/[^0-9a-zA-Z]/g, '')
    }

    s = s.trim().toLowerCase()

    s = filterNonAlphabet(s)

    let reversedStr = s.split('').reverse().join('')

    return reversedStr === s
};