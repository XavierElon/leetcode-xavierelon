function frequencySort(s: string): string {
    const map: Map<string, number> = new Map()

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1) 
    }

    const sortedCharacters = Array.from(map.entries()).sort((a, b) => b[1] - a[1])

    let result: string = ''
    for (const [char, freq] of sortedCharacters) {
        result += char.repeat(freq)
    }

    return result
};