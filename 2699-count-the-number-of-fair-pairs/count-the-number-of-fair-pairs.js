/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b)
    const countless = (val) => {
        let res = 0;
        for (let i = 0, j = nums.length - 1; i < j; ++i) {
            while (i < j && nums[i] + nums[j] > val) --j;
            res += j - i;
        }
        return res;
    };
    return countless(upper) - countless(lower - 1);
};