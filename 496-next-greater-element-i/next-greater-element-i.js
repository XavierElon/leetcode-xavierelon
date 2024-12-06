/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = []
    const hashmap = {}

    for (let num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            hashmap[stack.pop()] = num
        }
        stack.push(num)
    }

    while (stack.length > 0) {
        hashmap[stack.pop()] = -1
    }

    return nums1.map(num => hashmap[num] !== undefined ? hashmap[num] : -1)
};