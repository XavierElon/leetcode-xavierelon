function check(nums: number[]): boolean {
    let dropCount: number = 0
    const length: number = nums.length
    
    for (let i = 0; i < length; i++) {
        if (nums[i] > nums[(i + 1) % length]) dropCount++

        if (dropCount > 1) return false
    }

    return true
};