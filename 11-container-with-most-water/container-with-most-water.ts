function maxArea(height: number[]): number {
    let left: number = 0
    let right: number = height.length -1
    let maxWater: number = 0

    while (left < right) {
        const width: number = right - left
        const containerHeight: number = Math.min(height[left], height[right])
        maxWater = Math.max(maxWater, width * containerHeight)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWater
};