/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    map.set(0, 1)
    let currentSum = 0
    let count = 0

    for (let num of nums) {
        currentSum += num
        const complement = currentSum - k
        if (map.has(complement)) {
            count += map.get(complement)
        }
        map.set(currentSum, (map.get(currentSum) || 0) + 1)
    }
    return count
};