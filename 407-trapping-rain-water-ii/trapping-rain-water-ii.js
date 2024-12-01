class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper methods to get parent and child indices
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }

    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a new element into the heap
    insert(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up to maintain heap property after insertion
    heapifyUp(i) {
        let currentIndex = i;
        while (
            currentIndex > 0 &&
            this.heap[currentIndex].height < this.heap[this.parent(currentIndex)].height
        ) {
            this.swap(currentIndex, this.parent(currentIndex));
            currentIndex = this.parent(currentIndex);
        }
    }

    // Extract the minimum element from the heap
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    // Heapify down to maintain heap property after extraction
    heapifyDown(i) {
        let smallest = i;
        const left = this.left(i);
        const right = this.right(i);

        if (
            left < this.heap.length &&
            this.heap[left].height < this.heap[smallest].height
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right].height < this.heap[smallest].height
        ) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// ------------------------
// Trap Rain Water II Function
// ------------------------

/**
 * Calculates the volume of water trapped after raining on a 2D elevation map.
 * 
 * @param {number[][]} heightMap - The 2D elevation map.
 * @return {number} - The total volume of trapped water.
 */
var trapRainWater = function(heightMap) {
    if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) return 0;

    const m = heightMap.length;
    const n = heightMap[0].length;

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const heap = new MinHeap();

    // Initialize the heap with all boundary cells and mark them as visited
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m -1 || j === 0 || j === n -1) {
                heap.insert({ height: heightMap[i][j], x: i, y: j });
                visited[i][j] = true;
            }
        }
    }

    const directions = [
        [1, 0],  // Down
        [-1, 0], // Up
        [0, 1],  // Right
        [0, -1]  // Left
    ];

    let waterTrapped = 0;
    let maxHeight = 0;

    while (!heap.isEmpty()) {
        const current = heap.extractMin();
        const { height, x, y } = current;

        // Update the maximum height encountered so far
        maxHeight = Math.max(maxHeight, height);

        // Explore all 4-directional neighbors
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check boundaries
            if (newX < 0 || newX >= m || newY < 0 || newY >= n) continue;

            // If already visited, skip
            if (visited[newX][newY]) continue;

            visited[newX][newY] = true;

            // If the neighbor's height is less than the current maxHeight, water can be trapped
            if (heightMap[newX][newY] < maxHeight) {
                waterTrapped += maxHeight - heightMap[newX][newY];
            }

            // Insert the neighbor into the heap with the updated height
            heap.insert({ height: Math.max(heightMap[newX][newY], maxHeight), x: newX, y: newY });
        }
    }

    return waterTrapped;
};