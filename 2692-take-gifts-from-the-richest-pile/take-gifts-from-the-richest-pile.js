/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const maxHeap = new MaxPriorityQueue()

    for (const gift of gifts) {
        maxHeap.enqueue(gift)
    }

    for (let i = 0; i < k; i++) {
        const max = maxHeap.dequeue().element
        const squareRoot = Math.floor(Math.sqrt(max))
        maxHeap.enqueue(squareRoot)
    }
    
    let sum = 0
    while (maxHeap.size() > 0) {
        sum += maxHeap.dequeue().element
    }

    return sum
};