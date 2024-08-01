/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;
    const leftProducts = new Array(length).fill(1)
    const rightProducts = new Array(length).fill(1)
    const answer = new Array(length)

    for (let i = 1; i < length; i++) {
        leftProducts[i] = leftProducts[i-1] * nums[i-1]
    }

    for (let i = length - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i+1] * nums[i+1]
    }

    for (let i = 0; i < length; i++) {
        answer[i] = leftProducts[i] * rightProducts[i]
    }

    return answer
};