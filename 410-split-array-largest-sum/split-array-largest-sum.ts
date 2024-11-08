function splitArray(nums: number[], k: number): number {
    
    const isSplittable = (capacity: number): boolean => {
        let requiredSubarrays: number = 1
        let currentSum: number = 0

        for (const weight of nums) {
            if (currentSum + weight > capacity) {
                requiredSubarrays++
                currentSum = weight

                if (requiredSubarrays > k) {
                    return false
                }
            } else {
                currentSum += weight
            }
        }
        return true
    }

    let left: number = Math.max(...nums)
    let right: number = nums.reduce((acc, num) => acc + num, 0)

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        if (isSplittable(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
};