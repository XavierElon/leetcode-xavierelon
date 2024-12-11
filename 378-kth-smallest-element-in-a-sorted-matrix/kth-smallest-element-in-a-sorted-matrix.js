/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const maxHeap = new MaxPriorityQueue()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            maxHeap.enqueue(matrix[i][j])
            if (maxHeap.size() > k) maxHeap.dequeue()
        }
    }

    return maxHeap.front().element
};