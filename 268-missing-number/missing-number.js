/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set(nums)
    const length = nums.length + 1

    for (let i = 0; i < length; i++) {
        if (!set.has(i)) return i
    }
};