class Solution {
    private original: number[]
    private current: number[]

    constructor(nums: number[]) {
        this.original = [...nums]
        this.current = [...nums]
    }

    reset(): number[] {
        this.current = [...this.original]
        return this.current
    }

    shuffle(): number[] {
        for (let i = this.current.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            [this.current[i], this.current[j]] = [this.current[j], this.current[i]];
        }
        return this.current
    }
}


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */