/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const res = []

    nums.sort((a, b) => b - a)

    let sum = 0
    nums.forEach(number => sum += number)

    let current_sum = 0

    for (let i = 0; i < nums.length; i++) {
        current_sum += nums[i]
        res.push(nums[i])

        if (current_sum > sum - current_sum) {
            break;
        }
    }

    return res
};