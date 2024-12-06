/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = []
    const map = {}

    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length-1]) {
            map[stack.pop()] = num
        }
        stack.push(num)
    }

    while (stack.length > 0) {
        const num = stack.pop()
        map[num] = -1
    }

    const ans = nums1.map(num => map[num] !== undefined ? map[num] : -1)
    return ans
};