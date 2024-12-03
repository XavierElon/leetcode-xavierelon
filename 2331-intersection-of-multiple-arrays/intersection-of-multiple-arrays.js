/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const res = []
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            map.set(nums[i][j], (map.get(nums[i][j]) || 0) + 1)
        }
    }

    for (let [key, value] of map.entries()) {
        if (value === nums.length) {
            res.push(key)
        }
    }

    return res.sort((a, b) => a - b)
};