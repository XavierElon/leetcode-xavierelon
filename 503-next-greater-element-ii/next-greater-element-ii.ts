function nextGreaterElements(nums: number[]): number[] {
    const length: number = nums.length
    const result: Array<number> = new Array(length).fill(-1)
    const stack: number[] = []

    for (let i = 0; i < 2 * length; i++) {
        const currentIndex = i % length;

        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[currentIndex]) {
            const index = stack.pop()
            result[index] = nums[currentIndex]
        }

        if ( i < length) {
            stack.push(currentIndex)
        }
    }

    return result
};