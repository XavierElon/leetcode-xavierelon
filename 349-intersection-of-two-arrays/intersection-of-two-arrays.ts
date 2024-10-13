function intersection(nums1: number[], nums2: number[]): number[] {
    const set1: Set<number> = new Set(nums1)
    const set2: Set<number> = new Set(nums2)

    const smallerSet = set1.size < set2.size ? set1 : set2
    const largerSet = set2.size > set1.size ? set2 : set1;

    const result: number[] = []

    for (let num of smallerSet) {
        if (largerSet.has(num)) {
            result.push(num)
        }
    }
    return result
};