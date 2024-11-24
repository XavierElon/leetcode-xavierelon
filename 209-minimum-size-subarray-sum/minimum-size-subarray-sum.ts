function minSubArrayLen(target: number, nums: number[]): number {
    if (nums.length === 0) return 0

    let left: number = 0
    let sum = 0
    let minLength = Infinity

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left++]
        }
    }

    return minLength === Infinity ? 0 : minLength
};