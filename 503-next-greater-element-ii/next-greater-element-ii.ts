function nextGreaterElements(nums: number[]): number[] {
    const length: number = nums.length
    const result: Array<number> = new Array(length).fill(-1)
    const stack: number[] = []

    for (let i = 0; i < length * 2; i++) {
        const currentIndex: number = i % length

        while (stack.length > 0 && nums[stack[stack.length-1]] < nums[currentIndex]) {
            const index: number = stack.pop()
            result[index] = nums[currentIndex]
        }

        if (i < length) {
            stack.push(currentIndex)
        }
    }

    return result
};