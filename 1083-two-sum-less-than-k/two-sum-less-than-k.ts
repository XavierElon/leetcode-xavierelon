function twoSumLessThanK(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)
    let maxSum: number = -1

    function binarySearch(left: number, right: number, target: number): number {
        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2)
            
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return right
    }

    for (let i = 0; i < nums.length - 1; i++) {
        const j: number = binarySearch(i + 1, nums.length - 1, k - nums[i])
        if (j !== i) {
            maxSum = Math.max(maxSum, nums[i] + nums[j])
        }
    }
    return maxSum
};