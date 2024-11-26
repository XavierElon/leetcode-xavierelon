function shuffle(nums: number[], n: number): number[] {
    if (nums.length === 0) return []

    let firstPointer: number = 0
    let secondPointer: number = n
    const res: number[] = []

    while (firstPointer < n && secondPointer < n * 2) {
        res.push(nums[firstPointer++])
        res.push(nums[secondPointer++])
    }

    return res
};