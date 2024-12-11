/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const minHeap = new MinPriorityQueue()

    let rooms = 0

    for (const interval of intervals) {
        if (minHeap.size() === 0) rooms++
        else {
            const front = minHeap.front().element
            if (front <= interval[0]) {
                minHeap.dequeue()
            } else rooms++
        }
        minHeap.enqueue(interval[1])
    }
    return rooms
};