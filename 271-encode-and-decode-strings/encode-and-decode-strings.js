/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    const newStrs = strs.map(str => `${str.length}#${str}`).join('')
    console.log(newStrs)
    return newStrs
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
    console.log('s = ' + s)

    while (i < s.length) {
        let j = i
        while (s[j] !== '#') j++

        const length = parseInt(s.slice(i, j))
        result.push(s.slice(j + 1, j + 1 + length))
        i = j + 1 + length
    }
    console.log('result = ' + result)

    return result
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */