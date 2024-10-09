function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    if (k === 0) return 0
    const n: number = s.length
    if (n === 0) return 0

    let left: number = 0
    let maxLen: number = 0
    const charMap: Map<string, number> = new Map()

    for (let right = 0; right < n; right++) {
        const currentChar: string = s[right]
        charMap.set(currentChar, (charMap.get(currentChar) || 0) + 1)
        
        while (charMap.size > k) {
            const leftChar: string = s[left]
            charMap.set(leftChar, charMap.get(leftChar) - 1)
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar)
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
};