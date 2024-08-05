/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxWater = 0

    while (left < right) {
        const width = right - left
        const containerHeight = Math.min(height[left], height[right])
        const water = width * containerHeight

        maxWater = Math.max(water, maxWater)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWater
};