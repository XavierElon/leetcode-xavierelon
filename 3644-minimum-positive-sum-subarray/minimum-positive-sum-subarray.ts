function minimumSumSubarray(nums: number[], l: number, r: number): number {
    const n: number = nums.length
    const prefixSum: number[] = new Array(n+1).fill(0)

    for (let i = 0; i < n; i++) {
        prefixSum[i+1] = prefixSum[i] + nums[i]
    }

    let minSum = Infinity

    for (let i = 0; i < n; i++) {
        for (let len = l; len <= r; len++) {
            const j = i + len
            if (j <= n) {
                const sum = prefixSum[j] - prefixSum[i]
                if (sum > 0 && sum < minSum) {
                    minSum = sum
                }
            }
        }
    }

    return minSum === Infinity ? -1 : minSum
};