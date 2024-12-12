/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let prefixSum = [0]
    
    for (let i = 1; i <= nums.length; i++) {
        prefixSum.push(prefixSum[i-1] + nums[i - 1])
    }

    for (let i = 1; i <= nums.length; i++) {
        for (let j = 1; j <= i; j++) {
            if (prefixSum[i] - prefixSum[j-1] === k) {
                count += 1
            }
        }
    }

    return count
};