function containsDuplicate(nums: number[]): boolean {
    const seen: Set<number> = new Set()

    for (const num of nums) {
        if (seen.has(num)) {
            return true
        }
        seen.add(num)
    }

    return false
};