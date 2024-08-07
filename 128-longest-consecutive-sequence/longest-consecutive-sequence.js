/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums)

    let maxSequence = 0
    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num
            let currentSequence = 1

            while (numSet.has(currentNum + 1)) {
                currentNum++
                currentSequence++
            }
            maxSequence = Math.max(currentSequence, maxSequence)
        }
    }
    return maxSequence
};