function trap(height: number[]): number {
    let left: number = 0
    let right: number = height.length - 1
    let leftMax: number = 0
    let rightMax: number = 0
    let water: number = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left]
            } else {
                water += leftMax - height[left]
            }
            left++
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right]
            } else {
                water += rightMax - height[right]
            }
            right--
        }
    }

    return water
};