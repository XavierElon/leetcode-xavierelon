function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums)
    let maxSequence: number = 0

    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentSequence: number = 1
            let currentNumber: number = num

            while (numSet.has(currentNumber + 1)) {
                currentSequence++
                currentNumber++
            }
            maxSequence = Math.max(maxSequence, currentSequence)
        }
    }

    return maxSequence
};