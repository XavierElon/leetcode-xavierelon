/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    let str = ''

    for (let i = values.length - 1; i >= 0 && num > 0; i--) {
        while (num >= values[i]) {
            num -= values[i]
            str += symbols[i]
        }
    }

    return str
};