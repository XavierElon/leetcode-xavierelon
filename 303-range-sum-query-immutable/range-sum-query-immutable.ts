class NumArray {
    private prefixSums: number[]
    constructor(nums: number[]) {
        this.prefixSums = new Array(nums.length + 1).fill(0)

        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i+1] = this.prefixSums[i] + nums[i]
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefixSums[right+1] - this.prefixSums[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */