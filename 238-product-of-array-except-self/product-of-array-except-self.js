/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1)

    let leftProduct = 1
    let rightProduct = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] *= leftProduct
        leftProduct *= nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return result
};