function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const onlyInNums1: number[] = []
    const onlyInNums2: number[] = []

    for (const num of set1) {
        if (!set2.has(num)) {
            onlyInNums1.push(num)
        }
    }

    for (const num of set2) {
        if (!set1.has(num)) {
            onlyInNums2.push(num)
        }
    }

    return [onlyInNums1, onlyInNums2]
 };