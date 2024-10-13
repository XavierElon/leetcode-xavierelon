function intersect(nums1: number[], nums2: number[]): number[] {
    const countMap: { [key: number]: number } = {}
    const result: number[] = []

    for (const num of nums1) {
        countMap[num] = (countMap[num] || 0) + 1
    }

    for (const num of nums2) {
        if (countMap[num] && countMap[num] > 0) {
            result.push(num)
            countMap[num]--
        }
    }

    return result
};