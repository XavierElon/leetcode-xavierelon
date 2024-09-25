function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let maxVowelCount: number = 0
    let currentVowelCount: number = 0

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowelCount++
        }
    }

    maxVowelCount = currentVowelCount

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentVowelCount++
        }
        if (vowels.has(s[i - k])) {
            currentVowelCount--
        
        }
        maxVowelCount = Math.max(currentVowelCount, maxVowelCount)
    }

    return maxVowelCount
};