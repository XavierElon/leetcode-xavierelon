function containsNearbyDuplicate(nums: number[], k: number): boolean {
        const seen: Set<number> = new Set()

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true
            }

            seen.add(nums[i])

            if (seen.size > k) {
                seen.delete(nums[i - k])
            }
        }
    return false
};