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

    const maxHeap = new MaxPriorityQueue()
    for (let [num, count] of freqMap) {
        maxHeap.enqueue(num, count)
    }

    const result = []
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.dequeue().element)
    }

    return result
};