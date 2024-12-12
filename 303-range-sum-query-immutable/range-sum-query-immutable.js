/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = new Array(nums.length).fill(0)
    this.prefixSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        this.prefixSum[i] = nums[i] + this.prefixSum[i-1]
    }
    console.log(this.prefixSum)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return this.prefixSum[right]
    else {
        return this.prefixSum[right] - this.prefixSum[left - 1]
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */