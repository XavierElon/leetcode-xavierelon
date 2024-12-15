/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let count = 0
    let left = 0
    let window = new Map()

    for (let right = 0; right < nums.length; right++) {
        window.set(nums[right], (window.get(nums[right]) || 0) + 1)

        while (getMax(window) - getMin(window) > 2) {
            window.set(nums[left], (window.get(nums[left]) || 0) - 1)
            if (window.get(nums[left]) === 0) {
                window.delete(nums[left])
            }
            left++
        }
        count += right - left + 1
    }
    return count
};

function getMin (map) {
    return Math.min(...map.keys())
}

function getMax (map) {
    return Math.max(...map.keys())
}