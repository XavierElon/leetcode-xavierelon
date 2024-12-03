/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const res = []
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const uniqueElements = new Set(nums[i])

        for (let num of uniqueElements) {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }

    for (let [key, value] of map.entries()) {
        if (value === nums.length) {
            res.push(key)
        }
    }

    return res.sort((a, b) => a - b)
};