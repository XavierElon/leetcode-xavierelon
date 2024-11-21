class TimeMap {
    private store: Map<string, Array<[number, string]>>

    constructor() {
        this.store = new Map()    
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) {
            this.store.set(key, [])
        }

        this.store.get(key).push([timestamp, value])
    }

    get(key: string, timestamp: number): string {
        if (!this.store.has(key)) return ''

        const pairs = this.store.get(key)
        let left: number = 0
        let right: number = pairs.length - 1
        let result: number = -1

        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2)
            const [midTimestamp, midValue] = pairs[mid]

            if (midTimestamp === timestamp) {
                return midValue
            } else if (midTimestamp < timestamp) {
                result = mid
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return result !== -1 ? pairs[result][1] : ""
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */