function maximumCount(nums: number[]): number {
    let negCount: number = 0
    let posCount: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) negCount++
        else if (nums[i] > 0) posCount++
        else continue
    }

    return Math.max(negCount, posCount)
};