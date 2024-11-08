function minimumOperations(nums: number[]): number {
    const positiveNums = nums.filter(num => num > 0)

    const uniquePositiveNums: Set<number> = new Set(positiveNums)

    return uniquePositiveNums.size
};