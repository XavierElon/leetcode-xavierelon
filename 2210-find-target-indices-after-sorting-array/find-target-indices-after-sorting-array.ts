function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b)
    const result: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target)
        result.push(i)
    }

    return result
};