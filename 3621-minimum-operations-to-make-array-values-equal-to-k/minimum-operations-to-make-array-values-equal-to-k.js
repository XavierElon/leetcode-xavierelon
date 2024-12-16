/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

    nums.sort((a, b) => a - b);

    if(nums[0] < k) return -1;

    let ops = nums[0] === k ? 0 : 1;

    for(let i = nums.length - 2; i >= 0; i--) {

        ops += nums[i] === nums[i + 1] ? 0 : 1;
    }
    
    return ops;
};