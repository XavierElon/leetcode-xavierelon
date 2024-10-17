function twoSumLessThanK(nums: number[], k: number): number {
    let maxSum: number = -Infinity

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < k) maxSum = Math.max(maxSum, nums[i] + nums[j])
        }
    }

    return maxSum === -Infinity ? -1 : maxSum
};