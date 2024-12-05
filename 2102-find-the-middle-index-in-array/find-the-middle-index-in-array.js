/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    if (nums.length === 0) return 0

    const totalSum = nums.reduce((acc, num) => acc + num, 0)
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i]
        if (leftSum === rightSum) return i
        leftSum += nums[i]
    }

    return -1
};