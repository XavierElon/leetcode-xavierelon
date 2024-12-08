/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    const findClosestLeft = (index) => {
        let i = index - 1
        while (i >= 0 && nums[i] === nums[index]) i--

        return i >= 0 ? nums[i] : null
    }   

    const findClosestRight = (index) => {
        i = index + 1
        while (i < nums.length && nums[i] === nums[index]) i++

        return i < nums.length ? nums[i] : null
    } 

    let count = 0

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i-1]) continue

        const left = findClosestLeft(i)
        const right = findClosestRight(i)

        if (left === null || right === null) continue

        if (nums[i] > left && nums[i] > right || nums[i] < left && nums[i] < right) count++
    }

    return count
};