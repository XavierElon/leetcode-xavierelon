class RecentCounter {
    private requests: number[]
    private start: number

    constructor() {
        this.requests = []
        this.start = 0    
    }

    ping(t: number): number {
        this.requests.push(t)

        while (this.requests[this.start] < t - 3000) {
            this.start++
        }

        return this.requests.length - this.start
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */