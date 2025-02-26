class Solution:
    def findClosestElements(self, nums: List[int], k: int, target: int) -> List[int]:
        heap = []

        for num in nums:
            distance = abs(num - target)
            if len(heap) < k:
                heapq.heappush(heap, (-distance, num))
            elif distance < -heap[0][0]:
                heapq.heappushpop(heap, (-distance, num))

        distances = [pair[1] for pair in heap]
        distances.sort()
        return distances