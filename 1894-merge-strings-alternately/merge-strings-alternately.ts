function mergeAlternately(word1: string, word2: string): string {
    const merged: string[] = []

    const length1: number = word1.length
    const length2: number = word2.length
    const maxLength: number = length1 > length2 ? length1 : length2

    for (let i = 0; i < maxLength; i++) {
        merged.push(word1[i])

        if (i < length2) {
            merged.push(word2[i])
        }
    }

    return merged.join('')
};