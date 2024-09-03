function summaryRanges(nums: number[]): string[] {
    const result: string[] = []
    let i: number = 0

    while (i < nums.length) {
        let start: number = i

        while (i + 1 < nums.length && nums[i+1] === nums[i] + 1) {
            i++
        }

        if (start === i) {
            result.push(`${nums[start]}`)
        } else {
            result.push(`${nums[start]}->${nums[i]}`)
        }
        i++
    } 
    return result
};