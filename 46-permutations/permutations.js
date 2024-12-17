/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    // If array has only one element, return it as a single permutation
    if (nums.length === 1) {
        return [[...nums]];
    }
    
    // Backtracking function
    function backtrack(currentPerm, remainingNums) {
        // Base case: if no numbers left to add, we have a valid permutation
        if (remainingNums.length === 0) {
            result.push([...currentPerm]);
            return;
        }
        
        // Try each remaining number as the next element
        for (let i = 0; i < remainingNums.length; i++) {
            // Add current number to permutation
            currentPerm.push(remainingNums[i]);
            
            // Create new array of remaining numbers (excluding current number)
            const newRemaining = [
                ...remainingNums.slice(0, i),
                ...remainingNums.slice(i + 1)
            ];
            
            // Recurse with updated arrays
            backtrack(currentPerm, newRemaining);
            
            // Backtrack by removing the number we just added
            currentPerm.pop();
        }
    }
    
    // Start backtracking with empty permutation and all numbers available
    backtrack([], nums);
    
    return result;
}
