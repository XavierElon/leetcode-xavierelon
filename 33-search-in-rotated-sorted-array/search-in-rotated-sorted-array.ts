function search(nums: number[], target: number): number {
    let left: number = 0
    let right: number = nums.length - 1

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)

        if (nums[mid] === target) return mid

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && nums[right] >= target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    } 
    return -1
};