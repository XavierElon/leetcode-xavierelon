class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = Counter(nums)
        res = []

        for num in nums:
            freq[num] += 1
        heap = []
        
        for key, value in freq.items():
            heapq.heappush(heap, (value, key))
            if len(heap) > k:
                heapq.heappop(heap)

        return [key for (_, key) in heap]