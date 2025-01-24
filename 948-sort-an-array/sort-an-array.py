class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        
        def heapify(arr: List[int], heap_size: int, root: int) -> None:
            largest = root
            left = 2 * root + 1
            right = 2 * root + 2

            if left < heap_size and arr[left] > arr[largest]:
                largest = left

            if right < heap_size and arr[right] > arr[largest]:
                largest = right

            if largest != root:
                arr[root], arr[largest] = arr[largest], arr[root]
                heapify(arr, heap_size, largest)

        n = len(nums)

        for i in range(n // 2 - 1, -1, -1):
            heapify(nums, n, i)

        for i in range(n - 1, 0, -1):
            nums[i], nums[0] = nums[0], nums[i]
            heapify(nums, i, 0)

        return nums
        