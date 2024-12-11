/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    const minHeap = new MinPriorityQueue()
    let sum = 0

    for (let stick of sticks) {
        minHeap.enqueue(stick)
    }

    while (minHeap.size() > 1) {
        const y = minHeap.dequeue().element
        const x = minHeap.dequeue().element
        const currentSum = x + y

        sum += currentSum

        minHeap.enqueue(currentSum)
    }

    return sum
};