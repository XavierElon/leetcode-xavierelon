/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const res = []
    const maxHeap = new MaxPriorityQueue()

    points.forEach(p => {
        const distanceFromOrigin = Math.sqrt(p[0] * p[0] + p[1] ** 2)
        maxHeap.enqueue(p, distanceFromOrigin)
        if (maxHeap.size() > k) {
            maxHeap.dequeue()
        }
    })

    while (maxHeap.size() > 0) {
        res.push(maxHeap.dequeue().element)
    }

    return res
};