/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sumLeft = []
    const sumRight = []
    sumLeft[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        sumLeft[i] = sumLeft[i-1] + nums[i]
    }

    sumRight[nums.length - 1] = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        sumRight[i] = nums[i] + sumRight[i+1]
    }

    for (let i = 0; i < nums.length; i++) {
        const leftSum = i === 0 ? 0 : sumLeft[i-1]
        const rightSum = i === nums.length - 1 ? 0 : sumRight[i+1]
        if (leftSum === rightSum) return i
    }

    return -1
};