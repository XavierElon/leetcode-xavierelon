/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const minHeap = new MinPriorityQueue()

    let i
    for (i = 0; i < heights.length - 1; i++) {
        if (heights[i] >= heights[i+1]) continue

        const diff = heights[i+1] - heights[i]
        
        // Always add to min heap first
        minHeap.enqueue(diff)
        
        // If we've used more than available ladders
        if (minHeap.size() > ladders) {
            // Use bricks for smallest difference
            bricks -= minHeap.dequeue().element
        }
        
        // If we run out of bricks, we can't go further
        if (bricks < 0) break
    }
    return i
};