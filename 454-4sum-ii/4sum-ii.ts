function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const sumMap: Map<number, number> = new Map()
    let count: number = 0

    for (let a of nums1) {
        for (let b of nums2) {
            const sum: number = a + b
            sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
        }
    }

    for (let c of nums3) {
        for (let d of nums4) {
            const target = -(c + d)
            if (sumMap.has(target)) {
                count += sumMap.get(target)
            }
        }
    }

    return count
};