/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []

    for (let i = 0; i < nums.length; i++) {
        let low = i + 1, high = nums.length - 1, sum = 0;

        while (low < high) {
            sum = nums[i] + nums[low] + nums[high]
            if (sum === 0) {
                res.push([nums[i], nums[low], nums[high]])
                while (nums[low] === nums[low+1]) low++
                while(nums[high] === nums[high-1]) high--
                low++
                high--
            } else if (sum < 0) low++
            else high--
        }
        while (nums[i+1] === nums[i]) i++
    }
    return res
};