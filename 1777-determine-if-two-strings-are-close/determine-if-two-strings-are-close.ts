function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false

    const freq1: number[] = new Array(26).fill(0)
    const freq2: number[] = new Array(26).fill(0)

    for (let i = 0; i < word1.length; i++) {
        freq1[word1.charCodeAt(i) - 97]++
        freq2[word2.charCodeAt(i) - 97]++
    }

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] > 0) !== (freq2[i] > 0)) {
            return false
        }
    }

    const sortedFreq1 = freq1.filter(count => count > 0).sort((a, b) => a - b)
    const sortedFreq2 = freq2.filter(count => count > 0).sort((a, b) => a - b)

    for (let i = 0; i < sortedFreq1.length; i++) {
        if (sortedFreq1[i] !== sortedFreq2[i]) {
            return false
        }
    }

    return true
};