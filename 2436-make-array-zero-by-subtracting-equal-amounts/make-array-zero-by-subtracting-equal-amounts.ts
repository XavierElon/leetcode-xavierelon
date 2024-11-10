function minimumOperations(nums: number[]): number {
    const positiveNumbers: number[] = nums.filter((x => x > 0))

    const uniqueSet: Set<number> = new Set(positiveNumbers)

    return uniqueSet.size
};