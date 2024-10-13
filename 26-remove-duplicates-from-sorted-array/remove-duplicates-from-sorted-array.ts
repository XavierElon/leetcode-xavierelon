function removeDuplicates(nums: number[]): number {
    let x: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[x++] = nums[i]
        }
    }
    return x
};