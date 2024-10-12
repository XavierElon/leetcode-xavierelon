function search(nums: number[], target: number): boolean {
    if (nums.length === 0) return false;

    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] === target) return true;
        if (nums[left] === nums[mid]) left++
        if (nums[mid] === nums[right]) right--

        // If left to mid is sorted
        if (nums[left] < nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // If mid to right is sorted
        else if (nums[mid] < nums[right]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return nums[left] === target
};