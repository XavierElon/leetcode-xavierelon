function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    if (k === 0) return 0
    const length: number = s.length
    if (length === 0) return 0

    const charMap: Map<string, number> = new Map()
    let left: number = 0
    let maxLength: number = 0

    for (let right = 0; right < length; right++) {
        const currentChar: string = s[right]
        charMap.set(currentChar, (charMap.get(currentChar) || 0) + 1)
        while (charMap.size > k) {
            const leftChar: string = s[left++]
            charMap.set(leftChar, charMap.get(leftChar) - 1)
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar)
            }
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};