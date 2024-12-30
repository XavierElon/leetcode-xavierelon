/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let destination = nums.length - 1

    for (let i = destination; i >= 0; i--) {
        if (i + nums[i] >= destination) {
            destination = i
        }
    }

    return destination === 0
};