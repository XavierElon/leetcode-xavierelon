/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = new MaxPriorityQueue()

    for (const num of nums) {
        maxHeap.enqueue(num)
    }

    for (let i = 1; i < k; i++) {
        maxHeap.dequeue()
    }

    return maxHeap.dequeue().element
};