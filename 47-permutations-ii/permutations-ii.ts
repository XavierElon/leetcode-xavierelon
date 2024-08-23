function permuteUnique(nums: number[]): number[][] {
    const results: number[][] = []
    nums.sort((a, b) => a - b)
    const used: boolean[] = new Array(nums.length).fill(false)

    const backtrack = (currentPermutation: number[]): void => {
        if (currentPermutation.length === nums.length) {
            results.push([...currentPermutation])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue
            }

            currentPermutation.push(nums[i])
            used[i] = true

            backtrack(currentPermutation)

            currentPermutation.pop()
            used[i] = false
        }
    }

    backtrack([])

    return results
}; 