function findPairs(nums: number[], k: number): number {
    if (k < 0) return 0

    const frequencyMap: Map<number, number> = new Map()

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    let count: number = 0

    if (k === 0) {
        for (const [num, freq] of frequencyMap.entries()) {
            if (freq >= 2) {
                count++
            }
        }
    } else {
        for (const num of frequencyMap.keys()) {
            if (frequencyMap.has(num + k)) count++
        }
    }

    return count
};