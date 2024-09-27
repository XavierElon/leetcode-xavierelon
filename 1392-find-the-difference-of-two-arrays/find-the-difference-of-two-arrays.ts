function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const isOnlyInSet1: number[] = []
    const isOnlyInSet2: number[] = []

    for (const num of set1) {
        if (!set2.has(num)) {
            isOnlyInSet1.push(num)
        }
    }

    for (const num of set2) {
        if (!set1.has(num)) {
            isOnlyInSet2.push(num)
        }
    }

    return [isOnlyInSet1, isOnlyInSet2]
};