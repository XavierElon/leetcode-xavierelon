/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let result = new Array();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result[i] = nums[(i + nums[i]) % n];
        } else if (nums[i] < 0) {
            let value = (i - Math.abs(nums[i])) % n;
            if (value >= 0) {
                result[i] = nums[value];
            } else {
                result[i] = nums[value + n]
            };
        } else if (nums[i] == 0) {
            result[i] = nums[i];
        };
    };
    return result;
};