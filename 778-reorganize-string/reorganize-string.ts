function reorganizeString(s: string): string {
    const charCounts: number[] = new Array(26).fill(0)
    for (const char of s) {
        charCounts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    let maxCount: number = 0
    let letterIndex: number = 0
    for (let i = 0; i < 26; i++) {
        if (charCounts[i] > maxCount) {
            maxCount = charCounts[i]
            letterIndex = i
        }
    }

    if (maxCount > Math.ceil(s.length / 2)) return ''

    const ans: string[] = new Array(s.length)
    let index: number = 0

    while (charCounts[letterIndex] > 0) {
        ans[index] = String.fromCharCode(letterIndex + 'a'.charCodeAt(0))
        index += 2
        charCounts[letterIndex]--
    }

    for (let i = 0; i < 26; i++) {
        while (charCounts[i] > 0) {
            if (index >= s.length) {
                index = 1
            }
            ans[index] = String.fromCharCode(i + 'a'.charCodeAt(0))
            index += 2
            charCounts[i]--
        }
    }
    return ans.join('')
};