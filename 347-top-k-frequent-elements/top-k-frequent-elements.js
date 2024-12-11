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

    const minHeap = new MinPriorityQueue()
    for (let [num, count] of freqMap) {
        minHeap.enqueue(num, count)
        if (minHeap.size() > k) minHeap.dequeue()
    }

    const result = []
    while (minHeap.size() > 0) {
        result.push(minHeap.dequeue().element)
    }
    return result
};