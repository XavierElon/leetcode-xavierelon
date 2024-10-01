class MyCircularDeque {
    private queue: number[]
    private head: number
    private tail: number
    private size: number
    private capacity: number

    constructor(k: number) {
        this.queue = new Array(k)
        this.head = 0
        this.tail = 0
        this.size = 0
        this.capacity = k    
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false

        this.head = (this.head - 1 + this.capacity) % this.capacity
        this.queue[this.head] = value
        this.size++
        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false

        this.queue[this.tail] = value
        this.tail = (this.tail + 1) % this.capacity
        this.size++
        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false
        
        this.head = (this.head + 1) % this.capacity
        this.size--
        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false

        this.tail = (this.tail - 1 + this.capacity) % this.capacity
        this.size--
        return true
    }

    getFront(): number {
        if (this.isEmpty()) return -1
        return this.queue[this.head]
    }

    getRear(): number {
        if (this.isEmpty()) return -1
        return this.queue[(this.tail - 1 + this.capacity) % this.capacity] 
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.capacity
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */