function twoSum(numbers: number[], target: number): number[] {
    // Helper function to perform binary search
    const binarySearch = (arr: number[], left: number, right: number, key: number): number => {
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (arr[mid] === key) {
                return mid;
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Not found
    };

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];
        // Binary search in the subarray to the right of current index
        const complementIndex = binarySearch(numbers, i + 1, numbers.length - 1, complement);
        if (complementIndex !== -1) {
            // +1 for 1-based indexing
            return [i + 1, complementIndex + 1];
        }
    }

    // Since the problem guarantees exactly one solution, this line should never be reached.
    return [-1, -1];
}
