/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            const nextLargest = getNextLargest(i)
            swap(i, nextLargest)
            reverse(i+1)
            return
        }
    }

    reverse(0)

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    function reverse(idx) {
        let start = idx
        let end = nums.length - 1

        while (start < end) {
            swap(start, end)
            start++
            end--
        }
    }

    function getNextLargest(idx) {
        for (let i = nums.length -1; i > idx; i--) {
            if (nums[i] > nums[idx]) {
                return i
            }
        }
    }
};