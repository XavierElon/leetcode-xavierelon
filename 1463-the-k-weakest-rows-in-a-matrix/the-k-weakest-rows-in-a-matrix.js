/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const soldiers = mat.map(row => row.reduce((sum, val) => sum + val, 0))

    const minHeap = new MinPriorityQueue()

    for (let i = 0; i < mat.length; i++) {
        const priority = soldiers[i] * mat.length + i

        minHeap.enqueue(i, priority)
    }

    const result = []

    for (let i = 0; i < k; i++) {
        result.push(minHeap.dequeue().element)
    }

    return result
};