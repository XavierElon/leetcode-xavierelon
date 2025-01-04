/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;

    // Place each number in its correct index
    for (let i = 0; i < n; i++) {
        // Continue swapping until the current number is in the correct position
        while (nums[i] < n && nums[i] !== i) {
            const correctIndex = nums[i];
            // Swap nums[i] with nums[correctIndex]
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }

    // After rearrangement, find the missing number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    // If all numbers are in place, the missing number is n
    return n;
};