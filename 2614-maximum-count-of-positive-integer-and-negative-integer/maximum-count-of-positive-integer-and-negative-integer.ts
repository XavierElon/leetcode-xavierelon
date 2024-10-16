function maximumCount(nums: number[]): number {
    const firstNonNegative: number = binarySearch(nums, 0)

    const negCount = firstNonNegative

    const firstPositive: number = binarySearch(nums, 1)
    
    const posCount: number = nums.length - firstPositive

    return Math.max(negCount, posCount)
};

function binarySearch(nums: number[], target: number): number {
    let left: number = 0
    let right: number = nums.length

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}