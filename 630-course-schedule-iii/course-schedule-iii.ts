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
    courses.sort((a, b) => a[1] -b[1])
    let totalTime: number = 0
    const maxHeap = new MaxHeap()

    for (const [duration, lastDay] of courses) {
        if (totalTime + duration <= lastDay) {
            totalTime += duration
            maxHeap.insert(duration)
        } else if (maxHeap.size() > 0 && maxHeap.peek() > duration) {
            totalTime -= maxHeap.extractMax()
            totalTime += duration
            maxHeap.insert(duration)
        }
    }

    return maxHeap.size()
}