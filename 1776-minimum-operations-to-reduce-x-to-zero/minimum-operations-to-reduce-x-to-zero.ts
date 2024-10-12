function minOperations(nums: number[], x: number): number {
    const n: number = nums.length;
    const totalSum: number = nums.reduce((acc, num) => acc + num, 0);

    // If total sum is less than x, it's impossible to reduce x to zero
    if (totalSum < x) return -1;

    // If total sum equals x, remove all elements
    if (totalSum === x) return n;

    const target: number = totalSum - x;
    let maxLen: number = -1;
    let cumulativeSum: number = 0;
    const sumMap: Map<number, number> = new Map();
    sumMap.set(0, -1); // Initialize with sum 0 at index -1

    for (let i = 0; i < n; i++) {
        cumulativeSum += nums[i];

        // If (cumulativeSum - target) exists in sumMap, a subarray with sum 'target' is found
        if (sumMap.has(cumulativeSum - target)) {
            const prevIndex: number = sumMap.get(cumulativeSum - target)!;
            const currentLen: number = i - prevIndex;
            if (currentLen > maxLen) {
                maxLen = currentLen;
            }
        }

        // Store the earliest occurrence of the cumulative sum
        if (!sumMap.has(cumulativeSum)) {
            sumMap.set(cumulativeSum, i);
        }
    }

    // If no valid subarray found, return -1
    if (maxLen === -1) return -1;

    // Minimum operations is total elements minus the length of the found subarray
    return n - maxLen;
};