/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map()
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    const maxHeap = new MaxPriorityQueue()
    for (let [num, count] of freq) {
        maxHeap.enqueue(num, count)
    }

    const result = []
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.dequeue().element)
    }

    return result
};