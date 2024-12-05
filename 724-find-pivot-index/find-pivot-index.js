/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0)
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i]
        if (leftSum === rightSum) return i
        leftSum += nums[i]
    }

    return -1
};