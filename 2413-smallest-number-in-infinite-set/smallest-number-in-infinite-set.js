class SmallestInfiniteSet {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.minValue = 1;
        this.numSet = new Set();
    }

    popSmallest () {
        if (this.minHeap.size() !== 0) {
            const smallest = this.minHeap.dequeue().element;
            this.numSet.delete(smallest);
            return smallest;
        }

        return this.minValue++;
    }

    addBack (num) {
        if (num >= this.minValue || this.numSet.has(num)) return;

        this.minHeap.enqueue(num);
        this.numSet.add(num);
    }
}