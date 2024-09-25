function findMaxConsecutiveOnes(nums: number[]): number {
    let maxOnes: number = 0
    let currentOnes: number = 0

    for (let i = 0; i < nums.length; i++) {
         if (nums[i] === 1) {
            currentOnes++
            maxOnes = Math.max(currentOnes, maxOnes)
         } else {
            currentOnes = 0
         }
    }

    return maxOnes
};