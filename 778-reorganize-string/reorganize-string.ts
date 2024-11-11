function reorganizeString(s: string): string {
    const frequencyMap: Map<string, number> = new Map()

    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)
    }

    const sortedArray: Array<[string, number]> = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1])

    const maxCount: number = sortedArray[0][1]
    if (maxCount > Math.ceil(s.length /2)) return ''

    const ans: string[] = []
    let index: number = 0

    for (const [char, count] of sortedArray) {
        for (let i = 0; i < count; i++) {
            if (index >= s.length) index = 1
            ans[index] = char
            index += 2
        }
    }
    return ans.join('')
};