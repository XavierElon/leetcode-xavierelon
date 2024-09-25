function findMaxAverage(nums: number[], k: number): number {
    let currentSum: number = 0

    for (let i = 0; i < k; i++) {
        currentSum += nums[i]
    }

    let maxSum: number = currentSum

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] -  nums[i - k]
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum / k

};