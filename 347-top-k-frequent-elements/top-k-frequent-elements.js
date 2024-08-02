/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    const buckets = Array(nums.length + 1).fill().map(() => [])
    for (const [num, freq] of freqMap) {
        buckets[freq].push(num)
    }

    const result = []
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i])
    }
    console.log(result)

    return result
};