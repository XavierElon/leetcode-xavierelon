/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch)

    if (index === -1) {
        return word
    }

    const stack = []

    for (let i = 0; i <= index; i++) {
        stack.push(word[i])
    }

    let reversedSegment = ''
    while (stack.length > 0) {
        reversedSegment += stack.pop()
    }

    const remaining = word.slice(index + 1)
    return reversedSegment + remaining
};