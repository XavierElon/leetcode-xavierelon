function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = new Map()

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => [])

    for (const [num, freq] of frequencyMap.entries()) {
        bucket[freq].push(num)
    }

    const result: number[] = []

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            for (const num of bucket[i]) {
                result.push(num)
                if (result.length === k) return result
            }
        }
    }
};