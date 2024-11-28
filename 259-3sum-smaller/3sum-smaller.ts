function threeSumSmaller(nums: number[], target: number): number {
    let count: number = 0
    nums.sort((a, b) => a - b)
 
    for (let i = 0; i < nums.length - 2; i++) {
        let left: number = i + 1
        let right: number = nums.length - 1

        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right]

            if (sum < target) {
                 count += right - left
                 left++
            } else {
                right--
            }
        }
    }
    return count
};