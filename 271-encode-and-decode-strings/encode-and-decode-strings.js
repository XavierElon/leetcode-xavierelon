/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.map(str => `${str.length}#${str}`).join('')
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const result = []
    let i = 0

    while (i < s.length) {
        let j = i
        while (s[i] !== '#') i++
        const start = i + 1

        const length = parseInt(s.slice(j, i))
        result.push(s.slice(start, start + length))
        i = start + length
    }
    return result
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */