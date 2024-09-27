function uniqueOccurrences(arr: number[]): boolean {
    const frequencyMap: Map<number, number> = new Map()

    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    const frequencies: number[] = Array.from(frequencyMap.values())

    const frequencySet: Set<number> = new Set(frequencies)

    return frequencySet.size === frequencies.length
};