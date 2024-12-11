/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // Provide a priority function that returns the value as the priority
    const minHeap = new MinPriorityQueue({
        priority: (entry) => entry.value
    });

    const n = matrix.length

    for (let r = 0; r < Math.min(k, n); r++) {
        minHeap.enqueue({ value: matrix[r][0], r: r, c: 0 })
    }

    let element;
    for (let i = 0; i < k; i++) {
        element = minHeap.dequeue().element;
        const { r, c } = element;

        if (c < n - 1) {
            minHeap.enqueue({ value: matrix[r][c+1], r: r, c: c+1 });
        }
    }

    return element.value; // element is an object, return element.value if needed.
};