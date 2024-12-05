/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLength = 0
    let count = 0
    const map = new Map()

    map.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1

        if (map.has(count)) {
            const index = map.get(count)
            const currentLength = i - index 
            maxLength = Math.max(maxLength, currentLength)
        } else {
            map.set(count, i)
        }
    }

    return maxLength
};