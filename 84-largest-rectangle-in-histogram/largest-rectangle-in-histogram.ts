function largestRectangleArea(heights: number[]): number {
    const stack: number[] = []
    let maxArea: number = 0
    const n: number = heights.length

    for (let i = 0; i <= n; i++) {
        const currentHeight: number = i < n ? heights[i] : 0

        while (stack.length > 0 && currentHeight < heights[stack[stack.length-1]]) {
            const topIndex: number = stack.pop()
            const height: number = heights[topIndex]

            const width: number = stack.length === 0 ? i : i - stack[stack.length - 1] - 1

            const area: number = height * width

            if (area > maxArea) {
                maxArea = area
            }
        }
        stack.push(i)
    }

    return maxArea
};