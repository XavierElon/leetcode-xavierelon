/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    const memo = new Array(n).fill(null)

    const canReachEnd = (i) => {
        if (memo[i] !== null) {
            return memo[i]
        }
        if (i === n - 1) {
            memo[i] = true
            return true
        }

        const furthestJump = Math.min(i + nums[i], n - 1)

        for (let j = i + 1; j <= furthestJump; j++) {
            if (canReachEnd(j)) {
                memo[i] = true
                return true
            }
        }

        memo[i] = false
        return false
    }

    return canReachEnd(0)
};