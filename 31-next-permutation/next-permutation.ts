/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const length: number = nums.length

    let pivotIndex: number = length - 2
    while (pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex + 1]) {
        pivotIndex--
    }

    if (pivotIndex >= 0) {
        let swapIndex: number = length - 1
        while (nums[swapIndex] <= nums[pivotIndex]) {
            swapIndex--
        }

        [nums[pivotIndex], nums[swapIndex]] = [nums[swapIndex], nums[pivotIndex]]
    }

    let left: number = pivotIndex + 1
    let right: number = length - 1

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
};