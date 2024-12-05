/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const n = nums.length;
    const diff = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
            const prefix = new Set();
            const suffix = new Set();
        
            prefix.add(nums[0]);        
            for (let j = 1; j <= i; j++) {
             if (!prefix.has(nums[j])) prefix.add(nums[j]);
             }
        
            for (let j = i+1; j < n; j++) {
             if(!suffix.has(nums[j])) suffix.add(nums[j]);
             }
                
        const prefixSize = prefix.size;
        const suffixSize = suffix.size;

        diff[i] = prefixSize - suffixSize;
    }

    return diff;
    
};