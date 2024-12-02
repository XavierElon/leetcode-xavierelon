/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index = -1
    let reversedWord

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            index = i
            break
        }
    }

    console.log(index)
    if (index !== -1) {
        let chars = word.split('')
        let left = 0
        let right = index

        while (left < right) {
            let temp = chars[left]
            chars[left] = chars[right]
            chars[right] = temp
            left++
            right--
        }
        return chars.join('')
    }

    return word
};