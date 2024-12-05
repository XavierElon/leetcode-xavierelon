/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length
    const leftSum = new Array(n).fill(0)
    const rightSum = new Array(n).fill(0)
    const differences = new Array(n).fill(0)

    for (let i = 1; i < nums.length; i++) {
        leftSum[i] = leftSum[i-1] + nums[i-1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i+1] + nums[i+1]
    }

    for (let i = 0; i < nums.length; i++) {
        differences[i] = Math.abs(rightSum[i] - leftSum[i])
    }

    return differences
};