/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map()
    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
    }

    const maxHeap = new MaxPriorityQueue()
    for (let [num, count] of freq.entries()) {
        maxHeap.enqueue(num , count)
    }

    const result = []
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.dequeue().element)
    }

    return result
};