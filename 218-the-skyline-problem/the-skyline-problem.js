class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0] || 0;
    }

    add(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    remove(val) {
        const index = this.heap.indexOf(val);
        if (index === -1) return;
        
        // Replace with last element and remove last
        const last = this.heap.pop();
        if (index < this.heap.length) {
            this.heap[index] = last;
            this.bubbleDown(index);
        }
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] >= this.heap[index]) break;
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
            index = parentIdx;
        }
    }

    bubbleDown(index) {
        while (true) {
            let largest = index;
            const leftIdx = 2 * index + 1;
            const rightIdx = 2 * index + 2;

            if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largest]) {
                largest = leftIdx;
            }
            if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largest]) {
                largest = rightIdx;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    // Create points array with height changes
    const points = [];
    for (const [left, right, height] of buildings) {
        points.push([left, -height]);  // Negative height for start point
        points.push([right, height]);  // Positive height for end point
    }
    
    // Sort points by x-coordinate
    points.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];  // If x is same, process larger height first
    });
    
    const result = [];
    const heights = new MaxHeap();
    heights.add(0);  // Ground level
    let prevHeight = 0;
    
    // Process each point
    for (const [x, h] of points) {
        if (h < 0) {
            heights.add(-h);  // Add height at start point
        } else {
            heights.remove(h);  // Remove height at end point
        }
        
        const currentHeight = heights.peek();
        if (currentHeight !== prevHeight) {
            result.push([x, currentHeight]);
            prevHeight = currentHeight;
        }
    }
    
    return result;
};