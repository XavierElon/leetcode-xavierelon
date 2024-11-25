function missingNumber(nums: number[]): number {
    const set: Set<number> = new Set(nums)
    let expectedNumCount: number = nums.length + 1
    
    for (let i = 0; i < expectedNumCount; i++) {
        if (!set.has(i)) {
            return i
        }
    }
    return -1
}; 