/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        let max = nums[i]
        let min = nums[i]

        for (let j = i; j < nums.length; j++) {
            max = Math.max(max, nums[j])
            min = Math.min(min, nums[j])
            sum += max - min
        }
    }

    return sum
};