function increasingTriplet(nums: number[]): boolean {
    let first: number = Infinity
    let second: number = Infinity

    for (const num of nums) {
        if (num <= first) {
            first = num
        } else if (num <= second) {
            second = num
        } else {
            return true
        }
    }

    return false
};