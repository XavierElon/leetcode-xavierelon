/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = (nums) => {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);
    
    // Calculate the total sum of the array
    const total = nums.reduce((sum, num) => sum + num, 0);
    
    // Initialize the current sum
    let currentSum = 0;
    
    // Find the index where currentSum exceeds half of total
    const index = nums.findIndex(num => (currentSum += num) > total / 2);
    
    // Return the subsequence up to the found index
    return index !== -1 ? nums.slice(0, index + 1) : nums;
};