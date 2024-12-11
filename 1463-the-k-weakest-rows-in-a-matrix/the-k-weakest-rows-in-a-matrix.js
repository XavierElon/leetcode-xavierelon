/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const soldiers = mat.map(row => row.reduce((acc, val) => acc + val, 0))

    const maxHeap = new MaxPriorityQueue()

    for (let i = 0; i < mat.length; i++) {
        const priority = soldiers[i] * mat.length + i
        maxHeap.enqueue(i, priority)

        if (maxHeap.size() > k) maxHeap.dequeue()
    }

    const result = []
    while (!maxHeap.isEmpty()) {
        result.push(maxHeap.dequeue().element)
    }
    return result.reverse()
};