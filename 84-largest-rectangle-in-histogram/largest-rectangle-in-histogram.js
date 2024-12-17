/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    let stack = [-1];
    let maxArea = 0;
    for(let i=0; i<n; i++) {
        while(stack[stack.length-1] !== -1 && heights[stack[stack.length-1]] >= heights[i]) {
            const currentHeight = heights[stack.pop()];
            const currentWidth = i - stack[stack.length-1] -1;
            maxArea = Math.max(maxArea, currentHeight*currentWidth);
        }
        stack.push(i);
    }
    while(stack[stack.length-1] !== -1) {
        const currentHeight = heights[stack.pop()];
        const currentWidth = n - stack[stack.length-1] -1;
        maxArea = Math.max(maxArea, currentHeight*currentWidth);
    }
    return maxArea;
};