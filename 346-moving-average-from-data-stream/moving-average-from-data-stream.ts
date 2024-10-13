class MovingAverage {
    private size: number
    private queue: number[]
    private sum: number

    constructor(size: number) {
        this.size = size
        this.queue = []
        this.sum = 0
    }

    next(val: number): number {
        this.queue.push(val)
        this.sum += val

        if (this.queue.length > this.size) {
            const removed = this.queue.shift()
            this.sum -= removed
        }

        return this.sum / this.queue.length
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */