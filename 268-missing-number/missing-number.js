/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expectedSum = nums.length * (nums.length + 1) / 2
    let actualSum = nums.reduce((acc, currentValue) => {
        return acc + currentValue
    }, 0)

    return expectedSum - actualSum
};