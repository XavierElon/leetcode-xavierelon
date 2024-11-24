class Solution {
    private original: number[];
    private current: number[];

    constructor(nums: number[]) {
        // Make a deep copy of the original array
        this.original = [...nums];
        this.current = [...nums];
    }

    /** Resets the array to its original configuration and returns it. */
    reset(): number[] {
        // Restore the current array to the original state
        this.current = [...this.original];
        return this.current;
    }

    /** Shuffles the array and returns it. */
    shuffle(): number[] {
        // Apply Fisher-Yates Shuffle on the current array
        for (let i = this.current.length - 1; i > 0; i--) {
            // Generate a random index j such that 0 ≤ j ≤ i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements at indices i and j
            [this.current[i], this.current[j]] = [this.current[j], this.current[i]];
        }
        return this.current;
    }
}



/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */