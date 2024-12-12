/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const maxHeap = new MaxPriorityQueue()

    gifts.forEach(gift => maxHeap.enqueue(gift))

    for (let i = 0; i < k; i++) {
        const max = maxHeap.dequeue().element
        maxHeap.enqueue(Math.floor(Math.sqrt(max)))
    }

    let sum = 0
    while (maxHeap.size() > 0) {
        sum += maxHeap.dequeue().element
    }

    return sum
};