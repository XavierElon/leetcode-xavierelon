/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const res = []
    const minHeap = new MinPriorityQueue()

    points.forEach(p => {
        const distanceFromOrigin = Math.sqrt(p[0] * p[0] + p[1] ** 2)
        minHeap.enqueue(p, distanceFromOrigin)
    })

    while (res.length < k) res.push(minHeap.dequeue().element)
    return res
};