function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
    const result: number[][] = []
    let prev: number = lower - 1

    for (let i = 0; i <= nums.length; i++) {
        let current: number = (i < nums.length) ? nums[i] : upper + 1

        if (prev + 1 <= current - 1) {
            result.push([prev + 1, current - 1])
        }

        prev = current
    }

    return result
};