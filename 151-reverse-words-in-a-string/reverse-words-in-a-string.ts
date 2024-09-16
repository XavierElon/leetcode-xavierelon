function reverseWords(s: string): string {
    let trimmedStr = s.trim()
    let words: string[] = []
    let word: string = ''

    for (let i = 0; i < trimmedStr.length; i++) {
        if (trimmedStr[i] !== ' ') {
            word += trimmedStr[i]
        } else if (word.length > 0) {
            words.unshift(word)
            word = ''
        }
    }

    if (word.length > 0) {
        words.unshift(word)
    }

    return words.join(' ')
};