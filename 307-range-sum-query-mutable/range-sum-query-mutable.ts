class NumArray {
    private nums: number[];
    private bit: number[];
    private n: number;

    constructor(nums: number[]) {
        this.nums = nums.slice(); // Create a copy of the input array
        this.n = nums.length;
        this.bit = new Array(this.n + 1).fill(0);

        // Initialize the BIT with the given nums
        for (let i = 0; i < this.n; i++) {
            this._updateBIT(i + 1, this.nums[i]);
        }
    }

    /**
     * Updates the value at index `i` to `val` in the original array and BIT.
     * @param index - The index to update (0-based).
     * @param val - The new value to set.
     */
    update(index: number, val: number): void {
        const delta = val - this.nums[index];
        this.nums[index] = val;
        this._updateBIT(index + 1, delta);
    }

    /**
     * Returns the sum of the elements between indices `left` and `right` inclusive.
     * @param left - The left index (0-based).
     * @param right - The right index (0-based).
     * @returns The sum of elements from left to right.
     */
    sumRange(left: number, right: number): number {
        return this._prefixSum(right + 1) - this._prefixSum(left);
    }

    /**
     * Internal method to update the BIT with a delta at a specific index.
     * @param index - The index to update in the BIT (1-based).
     * @param delta - The value to add.
     */
    private _updateBIT(index: number, delta: number): void {
        while (index <= this.n) {
            this.bit[index] += delta;
            index += index & -index; // Move to the next responsible node
        }
    }

    /**
     * Internal method to compute the prefix sum up to a specific index.
     * @param index - The index up to which the sum is computed (1-based).
     * @returns The prefix sum from index 1 to the given index.
     */
    private _prefixSum(index: number): number {
        let result = 0;
        while (index > 0) {
            result += this.bit[index];
            index -= index & -index; // Move to the parent node
        }
        return result;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */