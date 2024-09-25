/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let lastNonZero: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZero++] = nums[i] 
        }
    }

    for (let i = lastNonZero; i < nums.length; i++) {
        nums[i] = 0
    }
};