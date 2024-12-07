/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1, right = Math.max(...nums)
    let ans = right

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let ops = 0

        for (let n of nums) {
            ops += Math.floor((n - 1) / mid)
            if (ops > maxOperations) break
        }

        if (ops <= maxOperations) {
            ans = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return ans
};