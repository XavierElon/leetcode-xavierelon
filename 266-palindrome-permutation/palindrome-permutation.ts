function canPermutePalindrome(s: string): boolean {
    const map: Map<string, number> = new Map()
    let oddCount: number = 0

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (const [char, count] of map) {
        if (map.get(char) % 2 !== 0) {
            oddCount++
            if (oddCount > 1) {
                return false
            }
        }
    }

    return true
};