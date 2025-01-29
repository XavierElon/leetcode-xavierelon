class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []

        for num in nums:
            heapq.heappush(heap, -num)

        for _ in range(k - 1):
            heapq.heappop(heap)

        return -heap[0]