class RecentCounter {
    private pings: number[]
    private start: number

    constructor() {
        this.pings = []
        this.start = 0
    }

    ping(t: number): number {
        this.pings.push(t)

        const lowerBound = t - 3000

        while (this.start < this.pings.length && this.pings[this.start] < lowerBound) {
            this.start++
        }

        return this.pings.length - this.start
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */