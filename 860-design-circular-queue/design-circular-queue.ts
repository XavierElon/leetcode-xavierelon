class MyCircularQueue {
    private queue: number[]
    private tail: number
    private head: number
    private size: number
    private capacity: number

    constructor(k: number) {
        this.queue = new Array(k)
        this.tail = 0
        this.head = 0
        this.size = 0
        this.capacity = k
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false

        this.queue[this.tail] = value
        this.tail = (this.tail + 1) % this.capacity
        this.size++
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false

        // this.queue[this.head] = undefined
        this.head = (this.head + 1) % this.capacity
        this.size--
        return true 
    }

    Front(): number {
        if (this.isEmpty()) return -1

        return this.queue[this.head]
    }

    Rear(): number {
        if (this.isEmpty()) return -1

        const rearIndex = (this.tail - 1 + this.capacity) % this.capacity
        return this.queue[rearIndex]
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.capacity
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */