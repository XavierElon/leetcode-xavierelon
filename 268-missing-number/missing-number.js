/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length

    for (let i = 0; i < n; i++) {
        while (nums[i] < n && nums[i] !== i) {
            let correctIndex = nums[i];

            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i
        }
    }

    return n
};