/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[0]

    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (fast !== slow)

    slow = nums[0]

    while (fast !== slow) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return fast
};