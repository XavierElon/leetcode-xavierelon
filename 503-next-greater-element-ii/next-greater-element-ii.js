/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const length = nums.length
    const res = new Array(length).fill(-1)
    const stack = []

    for (let i = 2 * length -1; i >= 0; i--) {
        const idx = i % length
        while (stack.length > 0 && stack[stack.length-1] <= nums[idx]) {
            stack.pop()
        }

        if (stack.length > 0 && i < length)  {
            res[idx] = stack[stack.length-1]
        } 

        stack.push(nums[idx])
    }

    return res
};