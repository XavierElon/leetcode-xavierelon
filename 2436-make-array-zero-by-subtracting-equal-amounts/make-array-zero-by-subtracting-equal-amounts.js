/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const positiveNumbers = nums.filter(x => x > 0)

    const set = new Set(positiveNumbers)

    return set.size
};