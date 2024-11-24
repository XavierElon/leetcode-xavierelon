function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0
    let sum: number = 0
    let minLength: number = Infinity

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while(sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left++]
        }
    }

    return minLength === Infinity ? 0 : minLength
};