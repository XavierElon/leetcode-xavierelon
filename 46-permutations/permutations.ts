function permute(nums: number[]): number[][] {
    const results: number[][] = []

    function backtrack(currentPermutation: number[], used: boolean[]): void {
        if (currentPermutation.length === nums.length) {
            results.push([...currentPermutation])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue

            currentPermutation.push(nums[i])
            used[i] = true

            backtrack(currentPermutation, used)

            currentPermutation.pop()
            used[i] = false
        }
    }

    backtrack([], new Array(nums.length).fill(false))

    return results
};