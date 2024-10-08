function fourSum(nums: number[], target: number): number[][] {
    const results: number[][] = []
    const n: number = nums.length
    nums.sort((a, b) => a - b)

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            let left: number = j + 1
            let right: number = n - 1

            while (left < right) {
                const sum: number = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]])

                    while (left < right && nums[left] === nums[left+1]) left++
                    while (left < right && nums[right] === nums[right-1]) right--
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return results
};