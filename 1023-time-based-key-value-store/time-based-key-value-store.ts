class TimeMap {
    // Map to store key to list of [timestamp, value] pairs
    private store: Map<string, Array<[number, string]>>;

    constructor() {
        this.store = new Map();
    }

    /**
     * Stores the key with the given value and timestamp.
     * @param key - The key to store.
     * @param value - The value associated with the key.
     * @param timestamp - The timestamp at which the value is stored.
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }

        // Use non-null assertion to inform TypeScript that the key exists
        this.store.get(key)!.push([timestamp, value]);

        // Removed console.log for efficiency and cleaner output
        // console.log(this.store);
    }

    /**
     * Retrieves the value associated with the key at the specified timestamp.
     * If multiple such values exist, returns the one with the largest timestamp <= target timestamp.
     * If no such value exists, returns an empty string "".
     * @param key - The key to retrieve.
     * @param timestamp - The timestamp at which to retrieve the value.
     * @returns The value associated with the key at the given timestamp, or "" if not found.
     */
    get(key: string, timestamp: number): string {
        if (!this.store.has(key)) return "";

        // Use non-null assertion to inform TypeScript that the key exists
        const pairs = this.store.get(key)!;
        let left: number = 0;
        let right: number = pairs.length - 1;
        let result: number = -1;

        // Binary search to find the rightmost timestamp <= target timestamp
        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            const [midTimestamp, midValue] = pairs[mid];

            if (midTimestamp === timestamp) {
                return midValue; // Exact match found
            } else if (midTimestamp < timestamp) {
                result = mid;     // Potential candidate found
                left = mid + 1;   // Search in the right half
            } else {
                right = mid - 1;  // Search in the left half
            }
        }

        // If a candidate was found, return its value; otherwise, return ""
        return result !== -1 ? pairs[result][1] : "";
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
