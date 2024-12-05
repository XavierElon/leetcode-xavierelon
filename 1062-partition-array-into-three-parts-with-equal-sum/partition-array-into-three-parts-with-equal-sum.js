/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    
    // If total sum is not divisible by 3, partitioning is impossible
    if (totalSum % 3 !== 0) return false;
    
    const targetSum = totalSum / 3;
    let currentSum = 0;
    let partitionsFound = 0;
    
    // Iterate through the array, excluding the last element to ensure at least one element in the third partition
    for (let i = 0; i < arr.length - 1; i++) {
        currentSum += arr[i];
        
        // When a partition with the target sum is found
        if (currentSum === targetSum) {
            partitionsFound++;
            currentSum = 0; // Reset for the next partition
            
            // If two partitions are found, the third will automatically have the target sum
            if (partitionsFound === 2) {
                return true;
            }
        }
    }
    
    // If fewer than two partitions are found, return false
    return false;
};