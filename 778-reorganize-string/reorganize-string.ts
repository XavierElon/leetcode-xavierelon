function reorganizeString(s: string): string {
    const frequencyMap: Map<string, number> = new Map()

    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)
    }

    const sortedArray = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1])

    const maxCount: number = sortedArray[0][1]
    if (maxCount > Math.ceil(s.length / 2)) return ""

    const ans: string[] = new Array(s.length)
    let index: number = 0

    const [mostFreqChar, mostFreq] = sortedArray[0]

    for (let i = 0; i < mostFreq; i++) {
        ans[index] = mostFreqChar
        index += 2
    }

    for (let i = 1; i < sortedArray.length; i++) {
        const [char, count] = sortedArray[i]
        for (let j = 0; j < count; j++) {
            if (index >= s.length) {
                index = 1
            }
   
            ans[index] = char
            index += 2
        }
    }

    return ans.join('')
};