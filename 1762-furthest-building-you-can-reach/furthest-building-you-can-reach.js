/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const maxHeap = new MaxPriorityQueue()

    let i
    for (i = 0; i < heights.length - 1; i++) {
        if (heights[i] >= heights[i+1]) continue

        const diff = heights[i+1] - heights[i]

        if (diff > bricks) {
            if (ladders === 0) break

            if (!maxHeap.isEmpty() && maxHeap.front().element > diff) {
                bricks += maxHeap.dequeue().element - diff
                maxHeap.enqueue(diff)
            }
            ladders--
        } else {
            bricks -= diff
            maxHeap.enqueue(diff)
        }
    }
    return i
};