/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let maxTripletValue = 0;
    let maxDiff = Math.max(nums[0] - nums[1], 0);
    let maxHeight = Math.max(nums[0], nums[1]);
    for (let k = 2; k < nums.length; k++) {
        let numK = nums[k];
        maxTripletValue = Math.max(maxDiff * numK, maxTripletValue);
        //max nums[i] - nums[j] i < j
        maxDiff = Math.max(maxDiff, maxHeight - numK);
        maxHeight = Math.max(maxHeight, numK);
    }
    return maxTripletValue;
};