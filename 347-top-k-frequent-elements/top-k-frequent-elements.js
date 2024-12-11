/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map()
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    const result = []
    const minHeap = new MinPriorityQueue()
    for (let [num, count] of freq) {
        minHeap.enqueue(num, count)
        if (minHeap.size() > k) {
            minHeap.dequeue()
        }
    }

    while (minHeap.size() > 0) {
        result.push(minHeap.dequeue().element)
    }

    return result
};