/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (nums.length === 0) return 0

    let left = 0
    let minLength = Infinity
    let sum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left++]
        }
    }

    return minLength === Infinity ? 0 : minLength
};