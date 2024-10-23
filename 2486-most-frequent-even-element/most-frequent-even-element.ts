function mostFrequentEven(nums: number[]): number {
    if (nums.length === 0) return -1

    const map: Map<number, number> = new Map()

    for (const num of nums) {
        if (num % 2 === 0) {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }

    let maxCount: number = -1
    let smallestMax: number = Infinity

    for (const [num, freq] of map.entries()) {
        if (freq > maxCount) {
            maxCount = freq
            smallestMax = num
        } else if (freq === maxCount) {
            smallestMax = Math.min(smallestMax, num)
        }
    }

    return smallestMax !== Infinity ? smallestMax : -1
};