/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function merge (left, mid, right) {
        let leftSize = mid - left + 1
        let rightSize = right - mid
        let leftArray = []
        let rightArray = []

        for (let i = 0; i < leftSize; i++) {
            leftArray[i] = nums[left + i]
        }

        for (let i = 0; i < rightSize; i++) {
            rightArray[i] = nums[mid + i + 1]
        }

        let leftPointer = 0
        let rightPointer = 0
        let pointer = left

        while (leftPointer < leftSize && rightPointer < rightSize) {
            if (leftArray[leftPointer] <= rightArray[rightPointer]) {
                nums[pointer] = leftArray[leftPointer++]
            } else {
                nums[pointer] = rightArray[rightPointer++]
            }
            pointer++
        }

        while (leftPointer < leftSize) {
            nums[pointer++] = leftArray[leftPointer++]
        }

        while (rightPointer < rightSize) {
            nums[pointer++] = rightArray[rightPointer++]
        }
    }

    function mergeSort(left, right) {
        if (left >= right) return

        const mid = Math.floor((left + right) / 2)

        mergeSort(left, mid)
        mergeSort(mid + 1, right)
        merge(left, mid , right)

    }
    mergeSort(0, nums.length - 1)
    return nums
};