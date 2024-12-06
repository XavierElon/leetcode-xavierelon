/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const length = nums.length
    const result = new Array(length).fill(-1)
    const stack = []

    for (let i = 0; i < length * 2; i++) {
        const currentIndex = i % length

        while (stack.length > 0 && nums[stack[stack.length-1]] < nums[currentIndex]) {
            const index = stack.pop()
            result[index] = nums[currentIndex]
        }

        if (i < length) {
            stack.push(currentIndex)
        }
    }

    return result
};