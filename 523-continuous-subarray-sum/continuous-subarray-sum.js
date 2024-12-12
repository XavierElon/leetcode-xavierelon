/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const map = new Map()

    map.set(0, -1)
    let prefixSum = 0

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]

        if (k !== 0) {
            prefixSum = prefixSum % k
        }

        if (map.has(prefixSum)) {
            if (i - map.get(prefixSum) >= 2) {
                return true
            } 
        } else {
            map.set(prefixSum , i)
        }
    }
    return false
};