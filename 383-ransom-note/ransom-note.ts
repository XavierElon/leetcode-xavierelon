function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: Map<string, number> = new Map()

    for (let char of magazine) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (let char of ransomNote) {
        if (!map.has(char)) return false
        else {
            map.set(char, (map.get(char) || 0) - 1)
            if (map.get(char) === 0) {
                map.delete(char)
            }
        }
    }

    return true
};