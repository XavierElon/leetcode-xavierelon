function countKDifference(nums: number[], k: number): number {
    const frequencyMap: Map<number, number> = new Map()
    let count: number = 0

    for (const num of nums) {
        if (frequencyMap.has(num + k)) {
            count += frequencyMap.get(num + k)
        }

        if (k !== 0 && frequencyMap.has(num - k)) {
            count += frequencyMap.get(num - k)
        }

        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }
    return count
};