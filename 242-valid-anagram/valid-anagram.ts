function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const map: Map<string, number> = new Map()

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (const char of t) {
        if (!map.has(char)) return false
        map.set(char, (map.get(char) || 0) - 1)
        if (map.get(char) === 0) map.delete(char)
    }

    return map.size === 0
};