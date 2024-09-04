function findMin(nums: number[]): number {
    let left: number = 0
    let right: number = nums.length - 1

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            right--
        }
    }
    return nums[left]
};