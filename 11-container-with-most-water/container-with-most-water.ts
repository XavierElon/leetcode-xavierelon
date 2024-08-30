function maxArea(height: number[]): number {
    let left: number = 0
    let right: number = height.length - 1
    let maxWater: number = 0

    while (left < right) {
        const width: number = right - left
        const containerHeight: number = Math.min(height[left], height[right])
        const water: number = width * containerHeight

        maxWater = Math.max(water, maxWater)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWater
};