function groupAnagrams(strs: string[]): string[][] {
    const map = {}

    for (const str of strs) {
        const sortedStr: string = str.split('').sort().join('')

        if (!map[sortedStr]) {
            map[sortedStr] = [str]
        } else {
            map[sortedStr].push(str)
        }
    }

    return Object.values(map)
};