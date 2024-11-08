function splitArray(nums: number[], k: number): number {
    
    const canSplit = (capacity: number): boolean => {
        let subarrays: number = 1
        let sum: number = 0

        for (const num of nums) {
            if (num + sum > capacity) {
                subarrays++
                sum = num
                if (subarrays > k) {
                    return false
                }
            } else {
                sum += num
            }

       
        }
        return true
    }

    let left: number = Math.max(...nums)
    let right: number = nums.reduce((acc, num) => acc + num, 0)

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        if (canSplit(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
};