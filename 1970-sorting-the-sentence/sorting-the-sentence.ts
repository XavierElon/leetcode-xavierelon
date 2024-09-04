function sortSentence(s: string): string {
    const words: string[] = s.split(' ')

    const sortedWords: string[] = new Array(words.length)

    for (const word of words) {
        const position: number = parseInt(word[word.length-1])

        sortedWords[position-1] = word.slice(0, -1)
    }
    return sortedWords.join(' ')
};