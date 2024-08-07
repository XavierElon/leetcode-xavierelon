function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums)

    let maxSequence: number = 0

    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum: number = num
            let currentSequence: number = 1

            while (numSet.has(currentNum + 1)) {
                currentSequence++
                currentNum++
            }
            maxSequence = Math.max(currentSequence, maxSequence)
        }
    }
    return maxSequence
};