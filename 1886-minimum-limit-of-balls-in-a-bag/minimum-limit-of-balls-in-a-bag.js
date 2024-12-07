/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    left = 1
    right = Math.max(...nums)

    const canSplit = (target) => {
        let operationsNeeded = 0

        for (const num of nums) {
            operationsNeeded += Math.floor((num -1) / target)

            if (operationsNeeded > maxOperations) {
                return false
            }
        }

        return operationsNeeded <= maxOperations
    }

    let result = right
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (canSplit(mid)) {
            result = mid
            right = mid -1
        } else {
            left = mid + 1
        }
    }

    return result
};