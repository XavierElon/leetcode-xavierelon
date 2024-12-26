/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = new Map();
    const n = nums.length;
    
    return countWaysToSum(n - 1, target);
    
    function countWaysToSum(index, rem) {
        const key = `${index}#${rem}`;
        
        // base case         
        if (index < 0) {
			if (rem === 0) return 1;
			return 0;
        }
        if (memo.has(key)) return memo.get(key);
        
        const plus = countWaysToSum(index - 1, rem + nums[index]) 
		const minus = countWaysToSum(index - 1, rem - nums[index]);
	    const count = plus + minus;
	
        memo.set(key, count);
        
        return count;
    }
};