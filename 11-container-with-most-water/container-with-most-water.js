/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0

    while (left < right) {
        let containerHeight = Math.min(height[left], height[right])
        let width = right - left
        let water = containerHeight * width
        max = Math.max(max, water)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return max
};