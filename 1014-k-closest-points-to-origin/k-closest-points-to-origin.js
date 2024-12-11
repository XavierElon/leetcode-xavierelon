/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const maxHeap = new MaxPriorityQueue()

    for (let point of points) {
        maxHeap.enqueue(point, squaredDistance(point))

        if (maxHeap.size() > k) {
            maxHeap.dequeue()
        }
    }

    const result = []
    while (maxHeap.size() > 0) {
        result.push(maxHeap.dequeue().element)
    }

    return result
};

function squaredDistance (point) {
    return point[0] ** 2 + point[1] ** 2
}