function applyOperations(nums: number[]): number[] {
    let lastNonZero: number = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] *= 2
            nums[i+1] = 0
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) nums[lastNonZero++] = nums[i]
    }

    for (let i = lastNonZero; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
};