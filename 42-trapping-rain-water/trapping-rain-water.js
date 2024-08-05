/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1

    let leftMax = 0
    let rightMax = 0
    let water = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left]
            } else {
                water += leftMax - height[left]
                console.log('left water = ' + water)
            }
            console.log('left = ' + left)
            left++
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right]
            } else {
                water += rightMax - height[right]
                console.log('right water = ' + water)

            }
            console.log('right = ' + right)
            right--
        }
    }

    return water
};