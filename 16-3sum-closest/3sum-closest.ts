function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    let closestSum: number = Infinity

    for (let i = 0; i < nums.length - 2; i++) {
        let left: number = i + 1
        let right: number = nums.length - 1

        while (left < right) {
            const currentSum: number = nums[i] + nums[left] + nums[right]

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum
            }

            if (currentSum < target) {
                left++
            } else if (currentSum > target) {
                right--
            } else {
                return currentSum
            }
        }
    }

    return closestSum
};