function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()

    for (const str of strs) {
        const sortedStr: string = str.split('').sort().join('')
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str)
        } else {
            map.set(sortedStr, [str])
        }
    }
    return Array.from(map.values())
};