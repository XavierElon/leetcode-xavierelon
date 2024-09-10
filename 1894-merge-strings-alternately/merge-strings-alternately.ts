function mergeAlternately(word1: string, word2: string): string {
    let merged: string[] = []
    let len1 = word1.length
    let len2 = word2.length

    for (let i = 0; i < Math.max(len1, len2); i++) {
        if (i < len1) {
            merged.push(word1[i])
        }

        if (i < len2) {
            merged.push(word2[i])
        }
    }
    return merged.join('')
};