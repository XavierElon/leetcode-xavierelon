class MaxHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    size(): number {
        return this.heap.length;
    }

    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMax(): number | undefined {
        if (this.heap.length === 0) return undefined;
        const max = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    private bubbleUp(): void {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];

            if (element <= parent) break;

            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    private sinkDown(): void {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap: number | null = null;

            if (leftChildIdx < length) {
                const leftChild = this.heap[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                const rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > this.heap[swap])
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

function scheduleCourse(courses: number[][]): number {
    // Step 1: Sort courses by their lastDay
    courses.sort((a, b) => a[1] - b[1]);

    // Step 2: Initialize totalTime and a max heap
    let totalTime = 0;
    const maxHeap = new MaxHeap();

    // Step 3: Iterate through the sorted courses
    for (const [duration, lastDay] of courses) {
        if (totalTime + duration <= lastDay) {
            // Take the course
            totalTime += duration;
            maxHeap.insert(duration);
        } else if (maxHeap.size() > 0 && maxHeap.peek()! > duration) {
            // Replace the longest course taken so far
            totalTime -= maxHeap.extractMax()!;
            totalTime += duration;
            maxHeap.insert(duration);
        }
        // Else, skip the course
    }

    // Step 4: Return the number of courses taken
    return maxHeap.size();
}