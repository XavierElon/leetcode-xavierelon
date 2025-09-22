class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        min_heap = []

        for num_str in nums:
            num_int = int(num_str)

            if len(min_heap) < k:
                heapq.heappush(min_heap, num_int)
            elif num_int > min_heap[0]:
                heapq.heappushpop(min_heap, num_int)

        return str(min_heap[0])