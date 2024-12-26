/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let totalWays = 0

    function calculateWays(currentIndex, currentSum) {
        if (currentIndex === nums.length) {
            if (currentSum === target) {
                totalWays++
            }
            return
        }

        calculateWays(currentIndex + 1, currentSum + nums[currentIndex])

        calculateWays(currentIndex + 1, currentSum - nums[currentIndex])
    }

    calculateWays(0, 0)

    return totalWays
};