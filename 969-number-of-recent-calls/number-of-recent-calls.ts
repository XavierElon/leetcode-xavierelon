class RecentCounter {
    private requests: number[]
    private startIndex: number

    constructor() {
        this.requests = []
        this.startIndex = 0    
    }

    ping(t: number): number {
        this.requests.push(t)

        while (this.requests[this.startIndex] < t - 3000) {
            this.startIndex++
        }

        return this.requests.length - this.startIndex
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */